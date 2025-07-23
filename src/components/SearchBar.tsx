"use client";
import React from "react";

interface SearchBarProps {
  height?: string;      // ex: "48px" or "3rem"
}

const trendingKeywords = [
  "무선 이어폰",
  "공기청정기",
  "핸드백",
  "책상",
  "청소기",
];

export default function SearchBar({ height = '2.5rem' }: SearchBarProps) {
  return (
    <div className="w-full mb-4 flex flex-col">
      {/* 검색창 + 돋보기 버튼 */}
      <div
        className="flex items-center w-full rounded-full border justify-center border-black overflow-hidden"
        style={{ height }}
      >
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-9/10 focus:outline-none h-full"
        />
        <button className="p-2 ml-2 cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.125 24.5H25.7425L25.2525 24.0275C27.0269 21.9696 28.0021 19.3422 28 16.625C28 14.3752 27.3329 12.176 26.083 10.3054C24.8331 8.43478 23.0565 6.97682 20.978 6.11588C18.8995 5.25493 16.6124 5.02967 14.4059 5.46857C12.1993 5.90748 10.1725 6.99084 8.58167 8.58167C6.99084 10.1725 5.90748 12.1993 5.46857 14.4059C5.02967 16.6124 5.25493 18.8995 6.11588 20.978C6.97682 23.0565 8.43478 24.8331 10.3054 26.083C12.176 27.3329 14.3752 28 16.625 28C19.4425 28 22.0325 26.9675 24.0275 25.2525L24.5 25.7425V27.125L33.25 35.8575L35.8575 33.25L27.125 24.5ZM16.625 24.5C12.2675 24.5 8.75001 20.9825 8.75001 16.625C8.75001 12.2675 12.2675 8.75001 16.625 8.75001C20.9825 8.75001 24.5 12.2675 24.5 16.625C24.5 20.9825 20.9825 24.5 16.625 24.5Z" fill="black" />
          </svg>
        </button>
      </div>

      {/* 인기 검색어 */}
      <div className="flex flex-wrap mt-2">
        <span className="font-semibold mr-2">인기검색어</span>
        {trendingKeywords.map((kw, i) => (
          <span
            key={i}
            className="text-gray-600 hover:underline mr-2"
          >
            #{kw}
          </span>
        ))}
      </div>
    </div>
  );
}
