import Link from 'next/link';
import React from 'react';

interface ItemCardProps {
  id: number;
  title: string;
  imageUrl: string;
  currentBid: number;
  timeRemaining: string;
}

export default function ItemCard({ id, title, imageUrl, currentBid, timeRemaining }: ItemCardProps) {
  return (
    <Link href={`/item/${id}`} className="block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="w-full h-48 bg-gray-200">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-1">현재 입찰가: ₩{currentBid.toLocaleString()}</p>
        <p className="text-sm text-gray-600">남은 시간: {timeRemaining}</p>
      </div>
    </Link>
  );
}