"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { categories } from "@/models/categories";

export default function NewItemPage() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [category, setCategory] = useState<string>(categories[0]?.slug || "");
  const [title, setTitle] = useState<string>("");
  const [startPrice, setStartPrice] = useState<string>("");
  const [buyNowPrice, setBuyNowPrice] = useState<string>("");
  const now = new Date();
  const nowLocal = now.toISOString().slice(0, 16); // YYYY-MM-DDThh:mm
  const [endTime, setEndTime] = useState<string>("");
  const [remaining, setRemaining] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // handle photo selection and generate previews
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    // 기존 photos 유지하면서 최대 10개까지 축적
    setPhotos((prev) => {
      const combined = [...prev, ...files];
      return combined.slice(0, 10);
    });
  };

  // 대표사진으로 설정 (해당 인덱스의 파일을 배열 맨 앞으로 이동)
  const setAsRepresentative = (index: number) => {
    setPhotos((prev) => {
      const newArr = [...prev];
      const [selected] = newArr.splice(index, 1);
      newArr.unshift(selected);
      return newArr;
    });
  };

  // 개별 사진 삭제
  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  // 가격 입력 콤마 포맷 함수
  const formatNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 경매 시작가 변경 시 즉시 구매가 자동 복사
  useEffect(() => {
    if (startPrice !== "") {
      setBuyNowPrice(startPrice);
    }
  }, [startPrice]);

  // Validation: 즉시구매가 >= 시작가여야
  const numericStart = Number(startPrice.replace(/,/g, "")) || 0;
  const numericBuyNow = Number(buyNowPrice.replace(/,/g, "")) || 0;
  const buyNowError = buyNowPrice !== "" && numericBuyNow < numericStart;

  useEffect(() => {
    // generate preview URLs
    const urls = photos.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    // cleanup
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [photos]);

  // calculate remaining time when endTime changes
  useEffect(() => {
    if (!endTime) {
      setRemaining("");
      return;
    }
    const end = new Date(endTime);
    const diff = end.getTime() - Date.now();
    if (diff <= 0) {
      setRemaining("경매 종료");
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      setRemaining(`${days}일 ${hrs}시간 ${mins}분 남음`);
    }
  }, [endTime]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 등록 로직 구현
    console.log({
      photos,
      category,
      title,
      startPrice,
      buyNowPrice,
      endTime,
      content,
    });
  };

  // wishlist 제외
  const catOptions = [
    { slug: "all", name: "전체" },
    ...categories.filter((c) => c.slug !== "wishlist"),
  ];

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          홈
        </Link>
        <span className="mx-2">&gt;</span>
        <span>상품 등록</span>
      </nav>

      <h1 className="mb-6 text-3xl font-bold">상품 등록</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 사진 등록 */}
        <div>
          <label className="mb-2 font-medium">사진 등록</label>
          <div className="flex items-start gap-2">
            {/* Camera box */}
            <div className="flex flex-col items-center">
              <label
                htmlFor="photo-input"
                className="flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded border border-gray-300"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.16658 8.16659H14.2916L18.3749 4.08325H30.6249L34.7083 8.16659H40.8332C41.9162 8.16659 42.9548 8.59679 43.7206 9.36257C44.4864 10.1283 44.9166 11.167 44.9166 12.2499V36.7499C44.9166 37.8329 44.4864 38.8715 43.7206 39.6373C42.9548 40.403 41.9162 40.8333 40.8332 40.8333H8.16658C7.08362 40.8333 6.04501 40.403 5.27923 39.6373C4.51346 38.8715 4.08325 37.8329 4.08325 36.7499V12.2499C4.08325 11.167 4.51346 10.1283 5.27923 9.36257C6.04501 8.59679 7.08362 8.16659 8.16658 8.16659ZM24.4999 14.2916C21.7925 14.2916 19.196 15.3671 17.2815 17.2815C15.3671 19.196 14.2916 21.7925 14.2916 24.4999C14.2916 27.2073 15.3671 29.8039 17.2815 31.7183C19.196 33.6327 21.7925 34.7083 24.4999 34.7083C27.2073 34.7083 29.8039 33.6327 31.7183 31.7183C33.6327 29.8039 34.7083 27.2073 34.7083 24.4999C34.7083 21.7925 33.6327 19.196 31.7183 17.2815C29.8039 15.3671 27.2073 14.2916 24.4999 14.2916ZM24.4999 18.3749C26.1244 18.3749 27.6823 19.0202 28.8309 20.1689C29.9796 21.3176 30.6249 22.8755 30.6249 24.4999C30.6249 26.1244 29.9796 27.6823 28.8309 28.8309C27.6823 29.9796 26.1244 30.6249 24.4999 30.6249C22.8755 30.6249 21.3175 29.9796 20.1689 28.8309C19.0202 27.6823 18.3749 26.1244 18.3749 24.4999C18.3749 22.8755 19.0202 21.3176 20.1689 20.1689C21.3175 19.0202 22.8755 18.3749 24.4999 18.3749Z"
                    fill="#747474"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  <span className="text-maincolor-500 mr-0.5">
                    {photos.length}
                  </span>
                  /10
                </span>
              </label>
              <input
                id="photo-input"
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="hidden"
              />
            </div>
            {/* Preview images */}
            {previews.map((src, idx) => (
              <div
                key={idx}
                className="group relative h-24 w-24 overflow-hidden rounded border border-gray-300"
              >
                {/* 대표사진 라벨 */}
                {idx === 0 && (
                  <span className="bg-maincolor-500 absolute top-1 left-1 rounded px-1 text-xs text-white">
                    대표사진
                  </span>
                )}

                <img
                  src={src}
                  alt={`preview-${idx}`}
                  className="h-full w-full object-cover"
                />

                {/* hover 오버레이 */}
                <div className="bg-transport absolute inset-0 z-10 flex flex-col items-center justify-start opacity-0 transition-opacity group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => removePhoto(idx)}
                    className="w-full rounded px-2 py-1 text-end text-sm font-bold text-white"
                  >
                    X
                  </button>
                  <button
                    type="button"
                    onClick={() => setAsRepresentative(idx)}
                    className="font=semibold text-md bg-maincolor-500 active:bg-maincolor-300 rounded px-2 py-1 text-white"
                  >
                    대표등록
                  </button>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity group-hover:opacity-30" />
              </div>
            ))}
          </div>
        </div>

        {/* 카테고리 */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium">카테고리 선택</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-50 rounded border border-gray-300 bg-white px-3 py-2 focus:outline-none"
          >
            {catOptions.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* 제목 */}
        <div className="flex flex-col">
          <label className="mb-2 font-medium">제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none"
          />
        </div>

        {/* 가격 */}
        <div className="flex gap-10">
          <div>
            <label className="mb-2 font-medium">경매 시작가</label>
            <div className="relative">
              {/* 원화 기호를 입력 박스 안에 절대 위치 */}
              <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                ₩
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={startPrice}
                onChange={(e) => setStartPrice(formatNumber(e.target.value))}
                placeholder="숫자만 입력"
                className="w-full rounded border border-gray-300 px-3 py-2 pl-8 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 font-medium">즉시 구매가</label>
            <div className="relative">
              <span className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
                ₩
              </span>
              <input
                type="text"
                inputMode="numeric"
                value={buyNowPrice}
                onChange={(e) => setBuyNowPrice(formatNumber(e.target.value))}
                placeholder="숫자만 입력"
                className="w-full rounded border border-gray-300 px-3 py-2 pl-8 focus:outline-none"
              />
            </div>
            {buyNowError && (
              <p className="mt-1 text-sm text-red-600">
                경매 시작가보다 적습니다.
              </p>
            )}
          </div>
        </div>

        {/* 시간 */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-2 font-medium">경매 시작시간</label>
            <input
              type="datetime-local"
              value={nowLocal}
              readOnly
              disabled
              className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-2"
            />
          </div>
          <div>
            <label className="mb-2 flex items-center justify-between font-medium">
              <span>경매 종료시간</span>
              {remaining && (
                <small className="text-gray-600">{remaining}</small>
              )}
            </label>
            <input
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* 내용 */}
        <div>
          <label className="mb-2 font-medium">내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            placeholder="상품에 대한 설명을 입력하세요"
            className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none"
          />
        </div>

        {/* 등록 버튼 */}
        <button
          type="submit"
          className="bg-maincolor-500 hover:bg-maincolor-300 w-full rounded py-2 font-medium text-white"
        >
          등록하기
        </button>
      </form>
    </div>
  );
}
