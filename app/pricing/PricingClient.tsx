"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { condensedFontClass } from "@/app/_lib/typography";

interface Props {
  isLoggedIn: boolean;
  subscription: {
    status: string;
    current_period_end: string | null;
  } | null;
}

export function PricingClient({ isLoggedIn, subscription }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isActive = subscription?.status === "active";

  async function handleSubscribe() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();
      if (res.status === 401) {
        router.push("/");
        return;
      }
      if (data.url) {
        window.location.href = data.url;
        return;
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  async function handleCancel() {
    if (!confirm("プレミアムプランをキャンセルしますか？\n現在の期間終了まで引き続きご利用いただけます。")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/cancel", { method: "POST" });
      if (res.ok) {
        router.refresh();
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  const renewalDate = subscription?.current_period_end
    ? new Date(subscription.current_period_end).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-3xl">
      {/* Free */}
      <div className="rounded-sm border border-[#d4d2ce] bg-white p-8">
        <p className={`${condensedFontClass} text-xs tracking-widest text-[#8c8a87]`}>FREE</p>
        <p className="mt-2 font-serif text-4xl">¥0</p>
        <p className="mt-1 text-sm text-[#8c8a87]">/ 月</p>
        <ul className="mt-8 space-y-3 text-sm text-[#5c5c5c]">
          <li>✓ オンラインショップ</li>
          <li>✓ メニュー閲覧</li>
          <li>✓ 店舗検索</li>
        </ul>
        <div className={`${condensedFontClass} mt-8 border border-[#d4d2ce] px-6 py-3 text-center text-xs tracking-widest text-[#8c8a87]`}>
          {isActive ? "フリープラン" : "現在のプラン"}
        </div>
      </div>

      {/* Premium */}
      <div className="rounded-sm border border-[#2b2b2b] bg-[#2b2b2b] p-8 text-white">
        <p className={`${condensedFontClass} text-xs tracking-widest text-[#c45c26]`}>PREMIUM</p>
        <p className="mt-2 font-serif text-4xl">¥980</p>
        <p className="mt-1 text-sm text-[#8c8a87]">/ 月（税込）</p>
        <ul className="mt-8 space-y-3 text-sm text-[#d4d2ce]">
          <li>✓ Free プランすべて</li>
          <li>✓ 豆の定期便 10% OFF</li>
          <li>✓ 新作豆の先行予約</li>
          <li>✓ バリスタ相談（月1回）</li>
          <li>✓ 会員限定レシピ</li>
        </ul>

        {isActive ? (
          <div className="mt-8 space-y-3">
            <div className={`${condensedFontClass} border border-[#c45c26] px-6 py-3 text-center text-xs tracking-widest text-[#c45c26]`}>
              現在のプラン
            </div>
            {renewalDate && (
              <p className="text-center text-xs text-[#8c8a87]">
                次回更新日: {renewalDate}
              </p>
            )}
            <button
              onClick={handleCancel}
              disabled={loading}
              className={`${condensedFontClass} w-full border border-[#8c8a87] px-6 py-3 text-xs tracking-widest text-[#8c8a87] hover:border-white hover:text-white transition-colors disabled:opacity-50`}
            >
              {loading ? "処理中..." : "フリープランに変更する"}
            </button>
          </div>
        ) : (
          <button
            onClick={handleSubscribe}
            disabled={loading || !isLoggedIn}
            className={`${condensedFontClass} mt-8 w-full bg-[#c45c26] px-6 py-3 text-xs tracking-widest text-white hover:bg-[#a84d1e] transition-colors disabled:opacity-50`}
          >
            {loading ? "処理中..." : !isLoggedIn ? "ログインが必要です" : "プレミアムに登録する"}
          </button>
        )}
      </div>
    </div>
  );
}
