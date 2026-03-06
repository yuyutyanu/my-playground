import Image from "next/image";
import { condensedFontClass, displayFontClass } from "@/app/_lib/typography";

export function HeroSection() {
  return (
    <>
      <section className="flex flex-wrap gap-x-7 gap-y-2 px-5 pb-10 text-xs tracking-[0.08em] text-[#8c8a87] md:px-[72px]">
        <p>豆鑑定士監修</p>
        <p>浅煎りから深煎りまで常時12種</p>
      </section>

      <section className="grid gap-8 px-5 pb-12 pt-3 md:grid-cols-2 md:gap-10 md:px-[72px] md:pb-16 md:pt-8">
        <div className="flex flex-col justify-center gap-4">
          <p className={`${condensedFontClass} text-xs tracking-[0.18em] text-[#c45c26]`}>SINGLE ORIGIN / HAND DRIP</p>
          <h1 className={`${displayFontClass} text-5xl leading-[1.08] md:text-7xl`}>
            一杯で、
            <br />
            一日を整える。
          </h1>
          <p className={`${displayFontClass} max-w-[32ch] text-base leading-relaxed text-[#5c5c5c] md:text-lg`}>
            焙煎から抽出まで丁寧に。静かな香りと深い余韻で、
            <br />
            朝のスイッチを入れるスペシャルティコーヒー。
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="bg-[#3d7a5a] px-5 py-3 text-sm text-white">豆を選ぶ</button>
            <button className="border border-[#d9d7d4] bg-transparent px-5 py-3 text-sm text-[#2b2b2b]">今週のおすすめ</button>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1719601714433-57e537f4e0e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w4NDM0ODN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NzEwNjg3MDR8&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cafe interior"
          width={1080}
          height={720}
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-[320px] w-full object-cover md:h-[460px]"
        />
      </section>
    </>
  );
}
