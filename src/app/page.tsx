"use client";
import { categories } from "../models/categories";
import SearchBar from "@/components/SearchBar";
import RotatingTextLib from "@/components/RotatingTextLib";
import CategoryTabs from "@/components/CategoryTab";

export default function HomePage() {
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
