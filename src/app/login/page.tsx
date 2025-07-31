"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        {/* 로고 */}
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        {/* 아이디 · 비밀번호 입력 */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="아이디"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* 로그인 버튼 */}
        <button className="mt-6 w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700">
          로그인
        </button>

        {/* 소셜 로그인 */}
        <div className="mt-4 flex space-x-4">
          <button className="flex-1 rounded bg-yellow-400 py-2 font-medium text-white hover:bg-yellow-500">
            카카오톡 로그인
          </button>
          <button className="flex-1 rounded bg-green-600 py-2 font-medium text-white hover:bg-green-700">
            네이버 로그인
          </button>
        </div>

        {/* 추가 링크 */}
        <div className="mt-6 flex justify-between text-sm text-gray-600">
          <Link href="#" className="hover:underline">
            아이디/비밀번호 찾기
          </Link>
          <Link href="#" className="hover:underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
