"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CategoryTabItem {
  name: string;
  slug: string;
}

interface CategoryTabsProps {
  categories: CategoryTabItem[];
}

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  return (
    <div className="mb-4 flex w-full max-w-170 flex-col items-center justify-center">
      <div className="mb-4 grid grid-cols-5 gap-4">
        {categories.slice(0, 5).map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="flex w-32 flex-col items-start gap-3 rounded-xl bg-gray-300 p-4 text-center transition duration-150 hover:bg-gray-200"
          >
            <Image
              src={`/images/${cat.slug}.svg`}
              alt={cat.name}
              width={24}
              height={24}
              className="mb-2 h-6 w-6"
            />

            <span className="font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
      <div className="grid max-w-150 grid-cols-4 gap-3">
        {categories.slice(5).map((cat, idx) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className={`flex w-32 flex-col items-start gap-3 rounded-xl p-4 text-center transition duration-150 hover:bg-gray-100 ${
              idx == 3
                ? "bg-orange-300 hover:bg-orange-200"
                : "bg-gray-300 hover:bg-gray-200"
            }`}
          >
            <Image
              src={`/images/${cat.slug}.svg`}
              alt={cat.name}
              width={24}
              height={24}
              className="mb-2 h-6 w-6"
            />
            <span className="font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
