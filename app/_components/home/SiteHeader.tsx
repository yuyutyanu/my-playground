"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";
import { condensedFontClass } from "@/app/_lib/typography";
import { LoginModal } from "@/app/_components/auth/LoginModal";

interface SiteHeaderProps {
  user: User | null;
  isPremium?: boolean;
}

export function SiteHeader({ user: initialUser, isPremium = false }: SiteHeaderProps) {
  const [user, setUser] = useState<User | null>(initialUser);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    // マウント時に最新のセッションを取得
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    // auth状態の変化を監視
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    location.reload();
  }

  async function handlePortal() {
    const res = await fetch("/api/stripe/portal", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
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
              {isPremium ? (
                <button
                  onClick={handlePortal}
                  className={`${condensedFontClass} bg-[#c45c26] px-3 py-1 text-[10px] tracking-widest text-white hover:bg-[#a84d1e] transition-colors`}
                >
                  PREMIUM
                </button>
              ) : (
                <Link
                  href="/pricing"
                  className={`${condensedFontClass} text-xs tracking-wide text-[#c45c26] hover:underline`}
                >
                  プレミアムに登録
                </Link>
              )}
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
