import React from 'react';

export default function MyPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">마이페이지</h1>
      <section>
        <h2 className="font-semibold">내 입찰 현황</h2>
        <p>입찰 중인 상품 목록이 표시됩니다.</p>
      </section>
      <section>
        <h2 className="font-semibold">등록한 상품</h2>
        <p>내가 등록한 상품 목록이 표시됩니다.</p>
      </section>
      <section>
        <h2 className="font-semibold">프로필 설정</h2>
        <p>개인정보 수정 폼이 표시됩니다.</p>
      </section>
    </div>
  );
}