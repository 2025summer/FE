import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="bg-maincolor-500 rounded px-5 py-1 text-white"
          >
            로그인
          </Link>
        </nav>
      </div>
    </header>
  );
}
