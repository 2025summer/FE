import React from 'react';

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  // TODO: API 호출로 상세 데이터 가져오기
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">상품 상세 #{params.id}</h1>
      <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center">
        <span className="text-gray-500">상품 이미지</span>
      </div>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded">입찰하기</button>
      <button className="px-4 py-2 border border-gray-300 rounded">찜하기</button>
      <section>
        <h2 className="text-xl font-semibold">상품 설명</h2>
        <p>여기에 상품 설명이 표시됩니다.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">실시간 채팅</h2>
        <div className="h-40 bg-gray-100 rounded p-2">채팅 영역</div>
      </section>
    </div>
  );
}