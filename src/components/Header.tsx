import Link from "next/link";
import React from "react";
import Logo from "../components/Logo"

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/login" className="hover:text-indigo-600">
            로그인
          </Link>
          <Link href="/mypage" className="hover:text-indigo-600">
            마이페이지
          </Link>
        </nav>
      </div>
    </header>
  );
}
