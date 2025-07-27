"use client";
import React from "react";
import RotatingText from "react-rotating-text";

export default function RotatingTextLib() {
  return (
    <div className="flex h-8 items-center text-4xl font-bold">
      <span>혹시 지금&nbsp;</span>
      <span className="flex items-center">
        <RotatingText
          items={["에어컨", "TV", "냉장고", "세탁기", "노트북"]}
          pause={3000} // 머무르는 시간(ms)
          typing={0} // 타이핑 애니메이션 없이 즉시 교체
          style={{ fontWeight: 800 }}
        />
        {/* 얇고 깜빡이는 커서 */}
        <span className="blink-cursor ml-1"></span>
      </span>
      <span>&nbsp;필요하신가요?</span>
    </div>
  );
}
