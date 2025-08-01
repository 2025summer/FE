import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="w-full">
      <div className="mt-2 flex items-start justify-between px-3 py-3">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>
        <div className="mt-2 w-2/3">
          <SearchBar height="40px" />
        </div>
        <Link
          href="/auth/login"
          className="bg-maincolor-500 mt-3 w-21 rounded px-5 py-1 text-white"
        >
          로그인
        </Link>
      </div>
    </header>
  );
}
