"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import SearchBar from "./SearchBar";
import { USER_INFO_KEY, USER_TYPE_KEY, ACCESS_TOKEN_KEY } from "@/lib/http";

type AuthUser = {
  username: string;
  email: string;
  role: "ADMIN" | "USER" | string;
};

export default function Header() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [type, setType] = useState<string | null>(null); // 별도 저장된 type

  const readAuth = () => {
    const saved = localStorage.getItem(USER_INFO_KEY);
    const savedType = localStorage.getItem(USER_TYPE_KEY);
    try {
      setUser(saved ? JSON.parse(saved) : null);
      setType(savedType);
    } catch {
      setUser(null);
      setType(null);
    }
  };

  useEffect(() => {
    readAuth();
    // 다른 탭/창에서 로그인 상태 변경도 반영
    const onStorage = (e: StorageEvent) => {
      if (
        [USER_INFO_KEY, USER_TYPE_KEY, ACCESS_TOKEN_KEY].includes(e.key ?? "")
      ) {
        readAuth();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(USER_INFO_KEY);
    localStorage.removeItem(USER_TYPE_KEY);
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    setUser(null);
    setType(null);
    window.location.href = "/auth/login";
  };

  const isAdmin = (role?: string | null) => role === "ADMIN";

  return (
    <header className="w-full">
      <div className="mt-2 flex items-start justify-between px-3 py-3">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>

        {user ? (
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="font-medium">{user.username}님</span>
              {isAdmin(type ?? user.role) && (
                <span className="rounded bg-red-500/90 px-2 py-0.5 text-xs text-white">
                  관리자
                </span>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="rounded bg-gray-400 px-4 py-1 text-white"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="bg-maincolor-500 mt-3 w-21 rounded px-5 py-1 text-white"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}
