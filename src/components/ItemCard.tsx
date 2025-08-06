"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import type { Item } from "@/models/item";

// Item 모델을 직접 Props로 사용
export default function ItemCard({
  id,
  title,
  imageUrl,
  currentBid,
  timeRemaining,
  instantBuyPrice,
}: Item) {
  const [hasError, setHasError] = useState(false);

  return (
    <Link href={`/item/${id}`} className="group block">
      <div className="mb-5 overflow-hidden bg-white">
        {/* 이미지 */}
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
          {!hasError ? (
            <Image
              src={imageUrl}
              alt={title}
              width={24}
              height={24}
              unoptimized
              className="h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setHasError(true)}
            />
          ) : (
            <div className="flex h-full w-full transform items-center justify-center transition-transform duration-300 group-hover:scale-105">
              {/* 중앙에 위치한 SVG 플레이스홀더 */}
              <svg
                width="108"
                height="108"
                viewBox="0 0 108 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.525 0C53.8208 0.000917456 57.9404 1.70817 60.9775 4.74624L102.608 46.377C106.061 49.83 108 54.5127 108 59.3955C108 64.2782 106.061 68.9609 102.608 72.4139L72.4139 102.608C68.9609 106.061 64.2782 108 59.3955 108C54.5127 108 49.83 106.061 46.377 102.608L4.74624 60.9775C1.70817 57.9404 0.000917456 53.8208 0 49.525V21.5983C0 15.8701 2.27553 10.3765 6.32601 6.32601C10.3765 2.27553 15.8701 0 21.5983 0H49.525ZM29.6977 18.8986C26.9732 18.8977 24.3491 19.9267 22.3513 21.7792C20.3536 23.6318 19.1299 26.171 18.9256 28.8878L18.8986 29.6977C18.8986 31.8336 19.5319 33.9215 20.7185 35.6974C21.9052 37.4733 23.5918 38.8575 25.5651 39.6749C27.5384 40.4922 29.7097 40.7061 31.8045 40.2894C33.8994 39.8727 35.8236 38.8442 37.3339 37.3339C38.8442 35.8236 39.8727 33.8994 40.2894 31.8045C40.7061 29.7097 40.4922 27.5384 39.6749 25.5651C38.8575 23.5918 37.4733 21.9052 35.6974 20.7185C33.9215 19.5319 31.8336 18.8986 29.6977 18.8986Z"
                  fill="#CCCCCC"
                />
              </svg>
            </div>
          )}
        </div>

        {/* 제목 및 찜 */}
        <div className="flex items-center justify-between py-2">
          <h3 className="flex-1 truncate text-sm font-medium">{title}</h3>
          <button>
            <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
          </button>
        </div>

        {/* 현재 입찰가 */}
        <div className="">
          <p className="text-xl font-bold">{currentBid.toLocaleString()}원</p>
        </div>

        {/* 즉시 구매가 & 남은 시간 */}
        <div className="flex items-center justify-between pb-2">
          <p className="truncate text-sm text-gray-600">
            즉시 구매 {instantBuyPrice.toLocaleString()}원
          </p>
          <p className="text-md">{timeRemaining}</p>
        </div>
      </div>
    </Link>
  );
}
