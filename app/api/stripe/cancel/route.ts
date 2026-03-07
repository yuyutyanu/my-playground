import { createClient } from "@/lib/supabase/server";
import { createServerClient } from "@supabase/ssr";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

function getSupabaseAdmin() {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { cookies: { getAll: () => [], setAll: () => {} } }
  );
}

export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("stripe_subscription_id")
    .eq("user_id", user.id)
    .single();

  if (!subscription?.stripe_subscription_id) {
    return NextResponse.json({ error: "No subscription found" }, { status: 404 });
  }

  await stripe.subscriptions.update(subscription.stripe_subscription_id, {
    cancel_at_period_end: true,
  });

  // RLS を回避するためサービスロールで更新
  const adminSupabase = getSupabaseAdmin();
  await adminSupabase
    .from("subscriptions")
    .update({ cancel_at_period_end: true })
    .eq("user_id", user.id);

  return NextResponse.json({ success: true });
}
