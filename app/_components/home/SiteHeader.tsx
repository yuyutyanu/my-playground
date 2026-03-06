"use client";

import { useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { condensedFontClass } from "@/app/_lib/typography";
import { LoginModal } from "@/app/_components/auth/LoginModal";

interface SiteHeaderProps {
  user: User | null;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const [showLogin, setShowLogin] = useState(false);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    location.reload();
  }

  return (
    <>
      <header className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 md:px-[72px]">
        <p className={`${condensedFontClass} text-xl font-bold tracking-[0.12em] md:text-2xl`}>COFFIE HOUSE</p>
        <nav className="hidden items-center gap-6 text-sm text-[#5c5c5c] md:flex">
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#shops">Shops</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-xs text-[#5c5c5c] md:block">{user.email}</span>
              <button
                onClick={handleLogout}
                className={`${condensedFontClass} border border-[#2b2b2b] px-4 py-2 text-xs tracking-[0.08em] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white transition-colors`}
              >
                LOG OUT
              </button>
            </>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              className={`${condensedFontClass} border border-[#2b2b2b] px-4 py-2 text-xs tracking-[0.08em] text-[#2b2b2b] hover:bg-[#2b2b2b] hover:text-white transition-colors`}
            >
              LOG IN
            </button>
          )}
          <button className={`${condensedFontClass} bg-[#2b2b2b] px-4 py-2 text-xs tracking-[0.08em] text-white`}>
            ORDER NOW
          </button>
        </div>
      </header>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
