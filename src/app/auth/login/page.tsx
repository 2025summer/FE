"use client";
import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function LoginPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 처리 로직
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-8">
        {/* 로고 */}
        <Link href="/" className="mb-8 flex cursor-pointer justify-center">
          <Logo />
        </Link>
        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 아이디 입력 */}
          <div className="flex items-center gap-2 border-b border-gray-300 px-3 py-2">
            {/* 아이콘 */}
            <svg
              width="25"
              height="25"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5002 2.58334C16.7775 2.58334 18.0262 2.96212 19.0882 3.67177C20.1503 4.38142 20.9781 5.39007 21.4669 6.57018C21.9557 7.75029 22.0836 9.04884 21.8344 10.3016C21.5852 11.5544 20.9701 12.7052 20.0669 13.6084C19.1637 14.5116 18.0129 15.1267 16.7601 15.3759C15.5073 15.6251 14.2088 15.4972 13.0287 15.0084C11.8486 14.5196 10.8399 13.6918 10.1303 12.6297C9.4206 11.5677 9.04183 10.319 9.04183 9.04168L9.04829 8.76139C9.12052 7.09869 9.83182 5.52806 11.0339 4.37703C12.2359 3.226 13.8359 2.58344 15.5002 2.58334ZM18.0835 18.0833C19.7964 18.0833 21.4391 18.7638 22.6502 19.9749C23.8614 21.1861 24.5418 22.8288 24.5418 24.5417V25.8333C24.5418 26.5185 24.2697 27.1756 23.7852 27.66C23.3007 28.1445 22.6436 28.4167 21.9585 28.4167H9.04183C8.35669 28.4167 7.69961 28.1445 7.21514 27.66C6.73067 27.1756 6.4585 26.5185 6.4585 25.8333V24.5417C6.4585 22.8288 7.13893 21.1861 8.3501 19.9749C9.56127 18.7638 11.204 18.0833 12.9168 18.0833H18.0835Z"
                fill="currentColor"
              />
            </svg>
            <input
              type="text"
              name="username"
              autoComplete="username"
              placeholder="E-mail"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>

          {/* 비밀번호 입력 */}
          <div className="flex items-center gap-2 border-b border-gray-300 px-3 py-2">
            {/* 아이콘 */}
            <svg
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 8.75C8.75 5.2975 11.5475 2.5 15 2.5C18.4525 2.5 21.25 5.2975 21.25 8.75V12.5H21.75C22.85 12.5 23.75 13.4 23.75 14.5V23.25C23.75 24.9 22.4 26.25 20.75 26.25H9.25C7.6 26.25 6.25 24.9 6.25 23.25V14.5C6.25 13.4 7.15 12.5 8.25 12.5H8.75V8.75ZM18.75 8.75V12.5H11.25V8.75C11.25 6.6775 12.9275 5 15 5C17.0725 5 18.75 6.6775 18.75 8.75ZM15 15.3125C14.5029 15.312 14.0205 15.4808 13.6322 15.7911C13.2438 16.1014 12.9728 16.5347 12.8636 17.0196C12.7545 17.5046 12.8137 18.0122 13.0316 18.459C13.2496 18.9058 13.6131 19.265 14.0625 19.4775V22.5C14.0625 22.7486 14.1613 22.9871 14.3371 23.1629C14.5129 23.3387 14.7514 23.4375 15 23.4375C15.2486 23.4375 15.4871 23.3387 15.6629 23.1629C15.8387 22.9871 15.9375 22.7486 15.9375 22.5V19.4775C16.3869 19.265 16.7504 18.9058 16.9684 18.459C17.1863 18.0122 17.2455 17.5046 17.1364 17.0196C17.0272 16.5347 16.7562 16.1014 16.3678 15.7911C15.9795 15.4808 15.4971 15.312 15 15.3125Z"
                fill="black"
              />
            </svg>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="Password"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="bg-maincolor-500 hover:bg-maincolor-300 mt-6 w-full cursor-pointer rounded py-2 font-semibold text-white"
          >
            로그인
          </button>
        </form>

        {/* 소셜 로그인 */}
        <div className="mt-4 flex justify-center space-x-4">
          <div className="bg-naver flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4_163)">
                <path
                  d="M13.5614 10.7033L6.14609 0H0V20H6.43861V9.295L13.8539 20H20V0H13.5614V10.7033Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>

          <div className="bg-kakao flex h-10 w-10 cursor-pointer items-center justify-center rounded-full">
            <svg
              width="18"
              height="18"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_126)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.9999 1.2C8.05823 1.2 -0.00012207 7.42591 -0.00012207 15.1046C-0.00012207 19.88 3.11669 24.0899 7.86293 26.5939L5.86593 33.889C5.6895 34.5336 6.42671 35.0474 6.99281 34.6738L15.7466 28.8964C16.4853 28.9677 17.236 29.0093 17.9999 29.0093C27.9408 29.0093 35.9997 22.7836 35.9997 15.1046C35.9997 7.42591 27.9408 1.2 17.9999 1.2Z"
                  fill="black"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* 추가 링크 */}
        <div className="me-5 mt-6 flex justify-center gap-20 text-sm text-gray-400">
          <Link href="/auth/forgot" className="hover:underline">
            Forgot ID/PW
          </Link>
          <Link href="/auth/signup" className="hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
