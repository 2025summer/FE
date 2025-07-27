"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "../models/categories";
import SearchBar from "@/components/SearchBar";
import RotatingTextLib from "@/components/RotatingTextLib";

const rotatingItems = ["에어컨", "TV", "냉장고", "세탁기", "노트북"];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center px-5 pt-20">
      {/* 회전 텍스트 */}
      <div className="relative mt-20 mb-4 flex h-20 w-full items-center justify-center overflow-hidden">
        <div className="absolute transition-transform duration-500">
          <RotatingTextLib />
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <SearchBar />
      </div>

      {/* 카테고리 버튼 */}
      <div className="mb-4 w-full max-w-4xl">
        <div className="mb-4 grid grid-cols-5 gap-4">
          {categories.slice(0, 5).map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="rounded border p-4 text-center hover:bg-gray-100"
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
              className="rounded border p-4 text-center hover:bg-gray-100"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
