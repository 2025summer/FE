"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import TermsModal from "@/components/modals/termsModal";
import { useSignUp } from "@/hooks/useSignUp";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const { loading, error, emailAvailable, onCheckEmail, onSubmit } =
    useSignUp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await onSubmit({
      username,
      email,
      password,
      confirmPassword,
      phone,
      postalCode,
      address,
      extraAddress,
      addressDetail,
    });
    if (res.ok) {
      alert("회원가입 성공");
      router.push("/auth/login");
    }
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
  };

  const openTermsModal = () => setShowTermsModal(true);
  const closeTermsModal = () => setShowTermsModal(false);

  const passwordsMatch = password === confirmPassword;

  const confirmEntered = confirmPassword.length > 0;

  // Daum 주소 API 스크립트 로드
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // 다음 주소 검색 팝업 호출
  const openDaumPostcode = () => {
    new (window as any).daum.Postcode({
      oncomplete: function (data: any) {
        let addr = ""; // 주소
        let extra = ""; // 참고항목

        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extra += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extra +=
              extra !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extra !== "") {
            extra = " (" + extra + ")";
          }
        }

        setPostalCode(data.zonecode);
        setAddress(addr);
        setExtraAddress(extra);
        // 상세주소 입력칸으로 포커스 이동
        setTimeout(() => {
          document.getElementById("addressDetail")?.focus();
        }, 0);
      },
    }).open();
  };

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          {/* 주소 */}
          <div>
            <label className="mb-1 font-medium">주소</label>
            <div className="mb-2 flex">
              <input
                type="text"
                value={postalCode}
                readOnly
                placeholder="우편번호"
                className="w-28 rounded border border-gray-300 bg-gray-100 px-4 py-2 text-center focus:outline-none"
              />
              <button
                type="button"
                onClick={openDaumPostcode}
                className="bg-maincolor-500 hover:bg-maincolor-300 ml-2 rounded px-4 py-2 text-white"
              >
                주소 검색
              </button>
            </div>
            <input
              type="text"
              value={address}
              readOnly
              placeholder="기본 주소"
              className="mb-2 w-full rounded border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none"
            />
            <input
              type="text"
              value={extraAddress}
              readOnly
              placeholder="참고항목"
              className="mb-2 w-full rounded border border-gray-300 bg-gray-100 px-4 py-2 focus:outline-none"
            />
            <input
              id="addressDetail"
              type="text"
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              placeholder="상세주소 입력"
              className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none"
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

        {/* 이용약관 모달 */}
        <TermsModal show={showTermsModal} onClose={closeTermsModal} />
      </div>
    </div>
  );
}
