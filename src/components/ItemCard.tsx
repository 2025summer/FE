import Link from "next/link";
import React from "react";

interface ItemCardProps {
  id: number;
  title: string;
  imageUrl: string;
  currentBid: number;
  timeRemaining: string;
}

export default function ItemCard({
  id,
  title,
  imageUrl,
  currentBid,
  timeRemaining,
}: ItemCardProps) {
  return (
    <Link
      href={`/item/${id}`}
      className="block overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-lg"
    >
      <div className="h-48 w-full bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 font-semibold">{title}</h3>
        <p className="mb-1 text-sm text-gray-600">
          현재 입찰가: ₩{currentBid.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">남은 시간: {timeRemaining}</p>
      </div>
    </Link>
  );
}
