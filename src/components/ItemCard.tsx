"use client";
import React from "react";
import { Heart } from "lucide-react";
import type { Item } from "@/models/item";

// Item 모델을 직접 Props로 사용
export default function ItemCard({
  title,
  imageUrl,
  currentBid,
  timeRemaining,
  instantBuyPrice,
}: Item) {
  return (
    <div className="overflow-hidden rounded border bg-white">
      {/* 이미지 */}
      <img
        src={imageUrl}
        alt={title}
        className="aspect-square w-full object-cover"
      />

      {/* 제목 및 찜 */}
      <div className="flex items-center justify-between p-2">
        <h3 className="flex-1 truncate text-sm font-medium">{title}</h3>
        <button>
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
        </button>
      </div>

      {/* 현재 입찰가 */}
      <div className="px-2">
        <p className="text-lg font-semibold">{currentBid.toLocaleString()}원</p>
      </div>

      {/* 즉시 구매가 & 남은 시간 */}
      <div className="flex items-center justify-between px-2 pb-2">
        <p className="truncate text-sm text-gray-600">
          즉시 구매 {instantBuyPrice.toLocaleString()}원
        </p>
        <p className="text-sm text-gray-600">{timeRemaining}</p>
      </div>
    </div>
  );
}
