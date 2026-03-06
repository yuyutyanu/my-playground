import type { User } from "@supabase/supabase-js";
import { HeroSection } from "./HeroSection";
import { MenuSection } from "./MenuSection";
import { ShopSection } from "./ShopSection";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { StorySection } from "./StorySection";
import { VoicesSection } from "./VoicesSection";

interface HomePageProps {
  user: User | null;
  isPremium?: boolean;
}

export function HomePage({ user, isPremium = false }: HomePageProps) {
  return (
    <main className="min-h-screen bg-[#f4f3f1] text-[#1c1c1c]">
      <div className="mx-auto w-full max-w-[1440px]">
        <SiteHeader user={user} isPremium={isPremium} />
        <HeroSection />
        <StorySection />
        <MenuSection />
        <VoicesSection />
        <ShopSection />
        <SiteFooter />
      </div>
    </main>
  );
}
