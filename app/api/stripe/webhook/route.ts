import { stripe } from "@/lib/stripe";
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type Stripe from "stripe";

// Webhook は生の body が必要なため Next.js のボディパーサーを無効化
export const dynamic = "force-dynamic";

function getSupabaseAdmin() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  );
}

async function upsertSubscription(
  supabase: ReturnType<typeof getSupabaseAdmin>,
  subscription: Stripe.Subscription
) {
  const userId = subscription.metadata?.supabase_user_id;
  if (!userId) return;

  await supabase.from("subscriptions").upsert({
    user_id: userId,
    stripe_customer_id: subscription.customer as string,
    stripe_subscription_id: subscription.id,
    status: subscription.status,
    price_id: subscription.items.data[0]?.price.id,
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
  }, { onConflict: "user_id" });
}

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.mode === "subscription" && session.subscription) {
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );
        await upsertSubscription(supabase, subscription);
      }
      break;
    }
    case "customer.subscription.updated":
    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      await upsertSubscription(supabase, subscription);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
