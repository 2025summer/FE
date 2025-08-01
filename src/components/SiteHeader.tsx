"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import HeaderSub from "@/components/HeaderSub";

export default function SiteHeader() {
  const pathname = usePathname();

  // /auth 로 시작하는 모든 라우트에서는 헤더 숨김
  if (pathname.startsWith("/auth")) {
    return null;
  }

  // 메인 페이지에서는 기본 Header
  if (pathname === "/") {
    return <Header />;
  }

  // 그 외의 페이지에서는 서브 Header
  return <HeaderSub />;
}
