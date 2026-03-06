import { condensedFontClass, displayFontClass } from "@/app/_lib/typography";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  dark?: boolean;
};

export function SectionTitle({ eyebrow, title, dark = false }: SectionTitleProps) {
  const eyebrowColor = dark ? "text-[#c45c26]" : "text-[#c45c26]";

  return (
    <>
      <p className={`${condensedFontClass} text-xs tracking-[0.18em] ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className={`${displayFontClass} mt-3 text-4xl md:text-5xl`}>{title}</h2>
    </>
  );
}
