import Image from "next/image";
import { displayFontClass } from "@/app/_lib/typography";
import { SectionTitle } from "./SectionTitle";

export function StorySection() {
  return (
    <section id="story" className="px-5 pb-14 md:px-[72px]">
      <SectionTitle eyebrow="OUR STORY" title="街の温度に寄り添うロースタリー" />
      <p className="mt-4 max-w-[56ch] text-base leading-relaxed text-[#5c5c5c] md:text-lg">
        生産者の背景まで辿った豆を、季節に合わせて焙煎。
        <br />
        店内でも、自宅でも、同じ香りの体験を届けます。
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_520px]">
        <div className="space-y-4 text-base leading-relaxed text-[#5c5c5c]">
          <p>浅煎りの果実感から深煎りの甘苦さまで、焙煎プロファイルを毎週更新。</p>
          <p>抽出レシピは 1g 単位で最適化し、スタッフ全員が同じ味を再現します。</p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1716001595535-0ddab48315a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzEwNjg3MzZ8&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Roasted coffee beans"
          width={1080}
          height={720}
          sizes="(min-width: 768px) 520px, 100vw"
          className="h-[300px] w-full object-cover md:h-[360px]"
        />
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <article className="bg-white p-4">
          <p className={`${displayFontClass} text-4xl`}>12</p>
          <p className="text-xs tracking-[0.08em] text-[#5c5c5c] [font-family:var(--font-condensed)]">常時ラインナップ豆</p>
        </article>
        <article className="bg-white p-4">
          <p className={`${displayFontClass} text-4xl`}>18,000+</p>
          <p className="text-xs tracking-[0.08em] text-[#5c5c5c] [font-family:var(--font-condensed)]">月間ドリップ提供杯数</p>
        </article>
        <article className="bg-white p-4">
          <p className={`${displayFontClass} text-4xl`}>4.9</p>
          <p className="text-xs tracking-[0.08em] text-[#5c5c5c] [font-family:var(--font-condensed)]">平均レビュー評価</p>
        </article>
      </div>
    </section>
  );
}
