"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "../models/categories";
import SearchBar from "@/components/SearchBar";
import RotatingTextLib from "@/components/RotatingTextLib";
import CategoryTabs from "@/components/CategoryTab";

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
      <div className="relative mt-20 flex h-20 w-full items-center justify-center overflow-hidden">
        <div className="absolute transition-transform duration-500">
          <RotatingTextLib />
        </div>
      </div>
      <div className="flex w-2/3 items-center justify-center">
        <SearchBar />
      </div>

      <CategoryTabs categories={categories} />
    </main>
  );
}
