import React from 'react';
import ItemCard from '../../components/ItemCard';

export default function FavoritesPage() {
  const favorites = Array.from({ length: 4 }).map((_, i) => ({
    id: i + 1,
    title: `찜한 상품 ${i + 1}`,
    imageUrl: `/images/item${i + 1}.jpg`,
    currentBid: 2000 + i * 500,
    timeRemaining: '00:30:00',
  }));

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">찜한 상품</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {favorites.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}