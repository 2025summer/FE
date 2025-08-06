"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import TermsModal from "@/components/modals/termsModal";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 회원가입 처리 로직
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  const checkEmailDuplicate = async () => {
    // TODO: 실제 이메일 중복 확인 API 호출
    // mock: 이메일 끝에 "ok" 포함 시 사용 가능
    const available = email.endsWith("ok");
    setEmailAvailable(available);
  };

  const openAddressModal = () => setShowAddressModal(true);
  const closeAddressModal = () => setShowAddressModal(false);

  const openTermsModal = () => setShowTermsModal(true);
  const closeTermsModal = () => setShowTermsModal(false);

  const passwordsMatch = password === confirmPassword;

  const confirmEntered = confirmPassword.length > 0;

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
            <label className="mb-1 flex items-baseline justify-start gap-3 font-medium">
              <span>이메일</span>
              {emailAvailable === true && (
                <small className="text-green-600">
                  사용 가능한 아이디입니다.
                </small>
              )}
              {emailAvailable === false && (
                <small className="text-red-600">
                  사용할 수 없는 아이디입니다.
                </small>
              )}
            </label>
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
                className="bg-maincolor-500 hover:bg-maincolor-300 ml-2 cursor-pointer rounded px-4 py-2 text-white"
              >
                중복 확인
              </button>
            </div>
          </div>

          {/* 비밀번호 */}
          <div>
            <label className="mb-1 flex items-center font-medium">
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
            <label className="mb-1 flex items-baseline justify-start gap-3 font-medium">
              <span>비밀번호 확인</span>
              {confirmEntered &&
                (passwordsMatch ? (
                  <small className="text-green-600">
                    비밀번호가 일치합니다.
                  </small>
                ) : (
                  <small className="text-red-600">
                    비밀번호가 일치하지 않습니다.
                  </small>
                ))}
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
            <label className="mb-1 font-medium">이름</label>
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
            <label className="mb-1 font-medium">핸드폰 번호</label>
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
            <label className="mb-1 flex justify-between font-medium">
              <span>주소(우편번호)</span>
            </label>
            <div className="flex">
              <input
                type="text"
                value={postalCode}
                readOnly
                placeholder="00000"
                className="w-30 rounded border border-gray-300 bg-gray-300 px-4 py-2 text-center focus:outline-none"
              />
              <button
                type="button"
                onClick={openAddressModal}
                className="bg-maincolor-500 hover:bg-maincolor-300 ml-2 cursor-pointer rounded px-4 py-2 text-white"
              >
                주소 검색
              </button>
            </div>
          </div>
          <div>
            <label className="mb-1 font-medium">상세주소</label>
            <input
              type="text"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              placeholder="상세주소 입력"
              className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 focus:outline-none"
            />
          </div>

          {/* 이용약관 */}
          <div className="flex items-baseline justify-start gap-3">
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
              className="cursor-pointer text-sm text-gray-400 hover:underline"
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

        {/* 주소 검색 모달 */}
        {showAddressModal && (
          <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-black">
            <div className="w-full max-w-sm rounded bg-white p-6">
              <h2 className="mb-4 text-lg font-semibold">주소 검색</h2>
              {/* 간단히 우편번호 입력 */}
              <input
                type="text"
                placeholder="우편번호 입력"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
              />
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={closeAddressModal}
                  className="rounded border border-gray-300 px-4 py-2"
                >
                  취소
                </button>
                <button
                  onClick={() => {
                    // 모달 닫고 그대로 postalCode 상태가 반영됨
                    closeAddressModal();
                  }}
                  className="bg-maincolor-500 rounded px-4 py-2 text-white"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 이용약관 모달 */}
        <TermsModal show={showTermsModal} onClose={closeTermsModal} />
      </div>
    </div>
  );
}
