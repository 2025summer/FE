import React from 'react';
import ItemCard from '../components/ItemCard';

// 더미 데이터
const featuredItems = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `상품 ${i + 1}`,
  imageUrl: `/images/item${i + 1}.jpg`,
  currentBid: 10000 + i * 5000,
  timeRemaining: '02:15:30',
}));

export default function HomePage() {
  return (
    <>
      {/* 검색 및 카테고리 네비 */}
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="flex-grow border border-gray-300 rounded px-3 py-2 mr-4"
        />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">검색</button>
      </div>
      <nav className="flex gap-4 mb-8 text-gray-700">
        {['전체', '전자기기', '패션', '가구', '취미'].map((cat) => (
          <button key={cat} className="hover:text-indigo-600">
            {cat}
          </button>
        ))}
      </nav>

      {/* 히어로 배너 */}
      <div className="mb-8">
        <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-2xl text-gray-500">히어로 배너 캐러셀 자리</span>
        </div>
      </div>

      {/* 추천 상품 그리드 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">추천 경매 상품</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              currentBid={item.currentBid}
              timeRemaining={item.timeRemaining}
            />
          ))}
        </div>
      </section>
    </>
  );
}
