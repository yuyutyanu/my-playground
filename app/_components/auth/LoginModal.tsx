"use client";

import { createClient } from "@/lib/supabase/client";
import { condensedFontClass } from "@/app/_lib/typography";

interface LoginModalProps {
  onClose: () => void;
}

export function LoginModal({ onClose }: LoginModalProps) {
  async function handleGoogleLogin() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1c1c1c]/70"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[480px] rounded-sm bg-[#f4f3f1] p-12 mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <p className={`${condensedFontClass} text-center text-xl font-bold tracking-[0.12em] text-[#1c1c1c]`}>
          COFFIE HOUSE
        </p>

        <div className="my-7 h-px bg-[#d4d2ce]" />

        <h2 className="text-center font-serif text-3xl text-[#1c1c1c]">
          ログインする
        </h2>
        <p className="mt-3 text-center text-sm leading-relaxed text-[#5c5c5c]">
          注文履歴やお気に入りを管理できます。
        </p>

        <button
          onClick={handleGoogleLogin}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-sm border border-[#d4d2ce] bg-white px-6 py-3.5 transition-colors hover:bg-gray-50"
        >
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4285F4] text-[11px] font-bold text-white">
            G
          </span>
          <span className={`${condensedFontClass} text-sm tracking-wide text-[#1c1c1c]`}>
            Googleでログイン
          </span>
        </button>

        <button
          onClick={onClose}
          className="mt-6 block w-full text-center text-sm text-[#8c8a87] hover:text-[#5c5c5c]"
        >
          キャンセル
        </button>
      </div>
    </div>
  );
}
