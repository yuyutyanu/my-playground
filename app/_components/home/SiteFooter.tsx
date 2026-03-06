import { condensedFontClass } from "@/app/_lib/typography";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#1f1f1f] px-5 pb-10 pt-10 text-[#f4f3f1] md:px-[72px]">
      <div className="grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className={`${condensedFontClass} text-2xl tracking-[0.12em]`}>COFFIE HOUSE</p>
          <p className="mt-2 text-sm text-[#b5b3b0]">Roastery & Cafe since 2016</p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div className="space-y-2">
            <p className={`${condensedFontClass} text-xs tracking-[0.08em] text-[#8c8a87]`}>SHOP</p>
            <p>Online Store</p>
            <p>Gift Cards</p>
          </div>
          <div className="space-y-2">
            <p className={`${condensedFontClass} text-xs tracking-[0.08em] text-[#8c8a87]`}>INFO</p>
            <p>Our Story</p>
            <p>Recruit</p>
          </div>
        </div>
      </div>
      <div className={`${condensedFontClass} mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#2d2d2d] pt-4 text-xs text-[#8c8a87]`}>
        <p>&copy; 2026 Coffie House. All rights reserved.</p>
        <p>Instagram&nbsp;&nbsp;X&nbsp;&nbsp;YouTube</p>
      </div>
    </footer>
  );
}
