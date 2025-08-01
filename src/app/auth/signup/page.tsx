"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 회원가입 처리 로직
  };

  const checkEmailDuplicate = () => {
    // TODO: 이메일 중복 확인 API 호출
    console.log("이메일 중복 확인: ", email);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const openAddressModal = () => setShowAddressModal(true);
  const closeAddressModal = () => setShowAddressModal(false);

  const openTermsModal = () => setShowTermsModal(true);
  const closeTermsModal = () => setShowTermsModal(false);

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="my-10 w-full max-w-md rounded-lg border p-8">
        {/* 로고 */}
        <Link href="/" className="mb-6 flex justify-center">
          <Logo />
        </Link>

        {/* 회원가입 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 이메일 */}
          <div>
            <label className="mb-1 block font-medium">이메일</label>
            <div className="flex">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일"
                className="flex-grow rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
              />
              <button
                type="button"
                onClick={checkEmailDuplicate}
                className="ml-2 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
              >
                중복확인
              </button>
            </div>
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="mb-1 block flex items-center font-medium">
              비밀번호
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              placeholder="비밀번호"
              className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>

          {/* 비밀번호 확인 */}
          <div>
            <label className="mb-1 block flex justify-between font-medium">
              <span>비밀번호 확인</span>
              {passwordsMatch && (
                <small className="text-green-600">비밀번호가 일치합니다.</small>
              )}
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              placeholder="비밀번호 확인"
              className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>

          {/* 이름 */}
          <div>
            <label className="mb-1 block font-medium">이름</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름"
              className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>

          {/* 핸드폰 */}
          <div>
            <label className="mb-1 block font-medium">핸드폰 번호</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="핸드폰 번호"
              className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>

          {/* 주소 검색 */}
          <div>
            <label className="mb-1 block flex justify-between font-medium">
              <span>주소(우편번호)</span>
            </label>
            <div className="flex">
              <input
                type="text"
                value={postalCode}
                readOnly
                placeholder="우편번호"
                className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
              />
              <button
                type="button"
                onClick={openAddressModal}
                className="ml-2 rounded bg-gray-200 px-4 py-2 hover:bg-gray-300"
              >
                주소 검색
              </button>
            </div>
          </div>
          <div>
            <label className="mb-1 block font-medium">상세주소</label>
            <input
              type="text"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              placeholder="상세주소 입력"
              className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>

          {/* 이용약관 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                checked={termsChecked}
                onChange={() => setTermsChecked(!termsChecked)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="ml-2 text-gray-700">
                이용약관 동의
              </label>
            </div>
            <button
              type="button"
              onClick={openTermsModal}
              className="text-sm text-blue-600 hover:underline"
            >
              자세히보기
            </button>
          </div>

          {/* 가입하기 버튼 */}
          <button
            type="submit"
            className="bg-maincolor-500 hover:bg-maincolor-300 mt-4 w-full rounded py-2 text-white"
            disabled={!termsChecked}
          >
            가입하기
          </button>
        </form>

        {/* 주소 검색 모달 (스켈레톤) */}
        {showAddressModal && (
          <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
            <div className="rounded bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">주소 검색</h2>
              {/* TODO: 주소 검색 API 컴포넌트 삽입 */}
              <p>주소 검색 기능이 들어갈 자리입니다.</p>
              <button
                onClick={closeAddressModal}
                className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
              >
                닫기
              </button>
            </div>
          </div>
        )}

        {/* 이용약관 모달 */}
        {showTermsModal && (
          <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
            <div className="max-w-lg rounded bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">이용약관</h2>
              {/* TODO: 이용약관 내용 삽입 */}
              <p>여기에 이용약관 내용이 표시됩니다.</p>
              <button
                onClick={closeTermsModal}
                className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
