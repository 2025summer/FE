import React from "react";
import ItemCard from "../../../components/ItemCard";

export default function CategoryPage({ params }: { params: { id: string } }) {
  // TODO: params.id로 API 호출
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i + 1,
    title: `카테고리 ${params.id} 상품 ${i + 1}`,
    imageUrl: `/images/item${i + 1}.jpg`,
    currentBid: 5000 + i * 1000,
    timeRemaining: "01:00:00",
  }));

  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">카테고리: {params.id}</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
