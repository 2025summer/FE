"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "../models/categories";
import SearchBar from "@/components/SearchBar";

const trendingKeywords = [
  "무선 이어폰",
  "공기청정기",
  "핸드백",
  "책상",
  "청소기",
];
const rotatingItems = ["에어컨", "TV", "냉장고", "세탁기", "노트북"];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingItems.length);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="px-5 flex flex-col items-center min-h-screen">
      {/* 회전 텍스트 */}
      <div className="relative flex items-center h-8 overflow-hidden mb-4 relative bg-red-500 w-full">
        <div
          className="absolute transition-transform duration-500"
          style={{ transform: `translateY(-${index * 100}%)` }}
        >
          {rotatingItems.map((item, i) => (
            <div key={i} className="h-8 flex items-center text-xl">
              혹시 지금 <span className="font-semibold">{item}</span>{" "}
              필요하세요?
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <SearchBar />
      </div>

      {/* 인기 검색어 */}
      <div className="w-full max-w-md mb-4">
        <div className="flex flex-wrap">
          {trendingKeywords.map((kw, i) => (
            <span key={i} className="text-gray-600 hover:underline mr-2">
              #{kw}
            </span>
          ))}
        </div>
      </div>

      {/* 카테고리 버튼 */}
      <div className="w-full max-w-4xl mb-4">
        <div className="grid grid-cols-5 gap-4 mb-4">
          {categories.slice(0, 5).map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="border p-4 text-center rounded hover:bg-gray-100"
            >
              {cat.name}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {categories.slice(5).map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="border p-4 text-center rounded hover:bg-gray-100"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
