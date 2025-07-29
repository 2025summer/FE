"use client";
import React from "react";
import Link from "next/link";

interface CategoryTabItem {
  name: string;
  slug: string;
}

interface CategoryTabsProps {
  categories: CategoryTabItem[];
}

export default function CategoryTabs({ categories }: CategoryTabsProps) {
  return (
    <div className="mb-4 w-full max-w-4xl">
      <div className="mb-4 grid grid-cols-5 gap-4">
        {categories.slice(0, 5).map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center rounded border p-4 text-center hover:bg-gray-100"
          >
            <img
              src={`/images/${cat.slug}.svg`}
              alt={cat.name}
              className="mb-2 h-6 w-6"
            />
            <span className="font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {categories.slice(5).map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="flex flex-col items-center rounded border p-4 text-center hover:bg-gray-100"
          >
            <img
              src={`/images/${cat.slug}.svg`}
              alt={cat.name}
              className="mb-2 h-6 w-6"
            />
            <span className="font-medium">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
