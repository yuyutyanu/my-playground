import { testimonials } from "@/app/_data/home-content";
import { condensedFontClass } from "@/app/_lib/typography";
import { SectionTitle } from "./SectionTitle";

export function VoicesSection() {
  return (
    <section className="bg-[#2b2b2b] px-5 py-12 text-[#f4f3f1] md:px-[72px]">
      <SectionTitle eyebrow="CUSTOMER VOICES" title="日常が少し好きになるコーヒー" dark />
      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.by} className="bg-[#3a3a3a] p-4">
            <p className="text-base leading-relaxed">{item.quote}</p>
            <p className={`${condensedFontClass} mt-3 text-xs tracking-[0.08em] text-[#b5b3b0]`}>{item.by}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
