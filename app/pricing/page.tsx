import { createClient } from "@/lib/supabase/server";
import { condensedFontClass } from "@/app/_lib/typography";
import { PricingClient } from "./PricingClient";

export const dynamic = "force-dynamic";

export default async function PricingPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  let subscription: { status: string; current_period_end: string | null } | null = null;
  if (user) {
    const { data } = await supabase
      .from("subscriptions")
      .select("status, current_period_end")
      .eq("user_id", user.id)
      .single();
    subscription = data ?? null;
  }

  return (
    <main className="min-h-screen bg-[#f4f3f1] text-[#1c1c1c]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-20 md:px-[72px]">
        <p className={`${condensedFontClass} text-sm tracking-[0.12em] text-[#c45c26]`}>
          MEMBERSHIP
        </p>
        <h1 className="mt-3 font-serif text-5xl font-normal text-[#1c1c1c]">
          プレミアム会員
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#5c5c5c]">
          豆の定期便、先行予約、バリスタ相談など<br />
          コーヒーをもっと深く楽しむための特典をご用意しています。
        </p>

        <PricingClient isLoggedIn={!!user} subscription={subscription} />
      </div>
    </main>
  );
}
