import React from "react";

type PageParams = Promise<{ id: string }>;

export default async function ItemDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { id } = await params;
  // TODO: API 호출로 상세 데이터 가져오기
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">상품 상세 #{id}</h1>
      <div className="flex h-64 w-full items-center justify-center rounded bg-gray-200">
        <span className="text-gray-500">상품 이미지</span>
      </div>
      <button className="rounded bg-indigo-600 px-4 py-2 text-white">
        입찰하기
      </button>
      <button className="rounded border border-gray-300 px-4 py-2">
        찜하기
      </button>
      <section>
        <h2 className="text-xl font-semibold">상품 설명</h2>
        <p>여기에 상품 설명이 표시됩니다.</p>
      </section>
      <section>
        <h2 className="text-xl font-semibold">실시간 채팅</h2>
        <div className="h-40 rounded bg-gray-100 p-2">채팅 영역</div>
      </section>
    </div>
  );
}
