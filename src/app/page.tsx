"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "../models/categories";

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
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-4 flex flex-col items-center">
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

        {/* 검색창 */}
        <div className="w-full max-w-md mb-4">
          <div className="flex">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            />
            <button className="border border-gray-300 rounded-r px-4 py-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z"
                />
              </svg>
            </button>
          </div>
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
    </div>
  );
}
