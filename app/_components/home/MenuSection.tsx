import Image from "next/image";
import { menuCards } from "@/app/_data/home-content";
import { condensedFontClass, displayFontClass } from "@/app/_lib/typography";
import { SectionTitle } from "./SectionTitle";

export function MenuSection() {
  return (
    <section id="menu" className="bg-white px-5 py-12 md:px-[72px]">
      <SectionTitle eyebrow="SIGNATURE MENU" title="今日の一杯を選ぶ" />
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {menuCards.map((item) => (
          <article key={item.title} className="bg-[#f9f8f6] pb-4">
            <Image
              src={item.image}
              alt={item.title}
              width={1080}
              height={720}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-56 w-full object-cover"
            />
            <div className="space-y-2 px-3 pt-3">
              <h3 className={`${displayFontClass} text-2xl`}>{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#5c5c5c]">{item.desc}</p>
              <p className={`${condensedFontClass} text-lg tracking-[0.06em] text-[#c45c26]`}>{item.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
