import { condensedFontClass } from "@/app/_lib/typography";

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-[72px]">
      <p className={`${condensedFontClass} text-xl font-bold tracking-[0.12em] md:text-2xl`}>COFFIE HOUSE</p>
      <nav className="hidden items-center gap-6 text-sm text-[#5c5c5c] md:flex">
        <a href="#menu">Menu</a>
        <a href="#story">Story</a>
        <a href="#shops">Shops</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className={`${condensedFontClass} bg-[#2b2b2b] px-4 py-2 text-xs tracking-[0.08em] text-white`}>
        ORDER NOW
      </button>
    </header>
  );
}
