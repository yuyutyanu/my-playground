"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { condensedFontClass } from "@/app/_lib/typography";

export default function PricingPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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
              現在のプラン
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
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className={`${condensedFontClass} mt-8 w-full bg-[#c45c26] px-6 py-3 text-xs tracking-widest text-white hover:bg-[#a84d1e] transition-colors disabled:opacity-50`}
            >
              {loading ? "処理中..." : "プレミアムに登録する"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
