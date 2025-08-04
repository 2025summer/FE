"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import ItemCard from "@/components/ItemCard";
import { categories } from "@/models/categories";
import type { Item } from "@/models/item";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // params 언랩
  const { id: selectedSlug } = use(params);

  // wishlist 제외
  const catOptions = [
    { slug: "all", name: "전체" },
    ...categories.filter((c) => c.slug !== "wishlist"),
  ];

  // Filters state
  const [categoryFilter, setCategoryFilter] = useState<string>(selectedSlug);
  const [auctionFilterEnabled, setAuctionFilterEnabled] = useState(false);
  const [auctionMin, setAuctionMin] = useState<number | "">("");
  const [auctionMax, setAuctionMax] = useState<number | "">("");

  const [buyNowFilterEnabled, setBuyNowFilterEnabled] = useState(false);
  const [buyNowMin, setBuyNowMin] = useState<number | "">("");
  const [buyNowMax, setBuyNowMax] = useState<number | "">("");

  // Dummy items (would fetch via API using selectedSlug and filters)
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // TODO: API 호출 및 필터 적용
    const data: Item[] = Array.from({ length: 8 }).map((_, i) => ({
      id: i + 1,
      title: `카테고리 ${categoryFilter} 상품 ${i + 1}`,
      imageUrl: `/images/item${i + 1}.jpg`,
      currentBid: 5000 + i * 1000,
      timeRemaining: "01:00:00",
      instantBuyPrice: 10000 + i * 1000,
    }));
    setItems(data);
  }, [
    categoryFilter,
    auctionFilterEnabled,
    auctionMin,
    auctionMax,
    buyNowFilterEnabled,
    buyNowMin,
    buyNowMax,
  ]);

  // Helpers
  const selectedCategoryName =
    catOptions.find((c) => c.slug === categoryFilter)?.name || "전체";

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          홈
        </Link>
        <span className="mx-2">&gt;</span>
        <span>{selectedCategoryName}</span>
      </nav>

      {/* Page Title */}
      <h1 className="mb-6 text-3xl font-black">{selectedCategoryName}</h1>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <aside className="w-60 space-y-6">
          {/* Category Filter */}
          <div>
            <h2 className="mb-2 text-2xl font-bold">카테고리</h2>
            <ul className="space-y-1">
              {catOptions.map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => setCategoryFilter(cat.slug)}
                    className={`w-full rounded px-2 py-1 text-left ${
                      categoryFilter === cat.slug
                        ? "bg-maincolor-300 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price & Instant Buy Filter */}
          <div className="border-t-2 pt-3">
            <h2 className="mb-2 font-medium">필터</h2>
            <label className="mb-2 inline-flex items-center">
              <input
                type="checkbox"
                checked={auctionFilterEnabled}
                onChange={() => setAuctionFilterEnabled(!auctionFilterEnabled)}
                className="mr-2 h-4 w-4 rounded border-gray-300"
              />
              가격 설정
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="최소"
                value={auctionMin}
                onChange={(e) =>
                  setAuctionMin(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
                disabled={!auctionFilterEnabled}
                className="w-1/2 rounded border border-gray-300 px-2 py-1 focus:outline-none disabled:opacity-50"
              />
              <span>~</span>
              <input
                type="number"
                placeholder="최대"
                value={auctionMax}
                onChange={(e) =>
                  setAuctionMax(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
                disabled={!auctionFilterEnabled}
                className="w-1/2 rounded border border-gray-300 px-2 py-1 focus:outline-none disabled:opacity-50"
              />
            </div>
            <label className="mb-2 inline-flex items-center">
              <input
                type="checkbox"
                checked={buyNowFilterEnabled}
                onChange={() => setBuyNowFilterEnabled(!buyNowFilterEnabled)}
                className="mr-2 h-4 w-4 rounded border-gray-300"
              />
              즉시 구매가
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="최소"
                value={buyNowMin}
                onChange={(e) =>
                  setBuyNowMin(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
                disabled={!buyNowFilterEnabled}
                className="w-1/2 rounded border border-gray-300 px-2 py-1 focus:outline-none disabled:opacity-50"
              />
              <span>~</span>
              <input
                type="number"
                placeholder="최대"
                value={buyNowMax}
                onChange={(e) =>
                  setBuyNowMax(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
                disabled={!buyNowFilterEnabled}
                className="w-1/2 rounded border border-gray-300 px-2 py-1 focus:outline-none disabled:opacity-50"
              />
            </div>
          </div>
        </aside>

        {/* Items Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              // ItemCard는 이제 Item 타입을 Props로 받습니다.
              <ItemCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
