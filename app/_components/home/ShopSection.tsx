import { displayFontClass } from "@/app/_lib/typography";

export function ShopSection() {
  return (
    <section id="shops" className="px-5 py-14 md:px-[72px]">
      <h2 className={`${displayFontClass} text-4xl md:text-6xl`}>あなたの朝に、香りの余白を。</h2>
      <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-[#5c5c5c] md:text-lg">
        オンラインで豆を選ぶか、店舗でバリスタに相談するか。
        <br />
        今日の気分に合わせて始められます。
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button className="bg-[#3d7a5a] px-5 py-3 text-sm text-white">オンライン注文</button>
        <button className="border border-[#d9d7d4] px-5 py-3 text-sm text-[#2b2b2b]">店舗を探す</button>
      </div>
    </section>
  );
}
