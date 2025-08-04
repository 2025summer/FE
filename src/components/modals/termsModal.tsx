"use client";
import React from "react";

interface TermsModalProps {
  show: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function TermsModal({ show, onClose }: TermsModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" />
      <div className="z-10 max-w-lg rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-lg font-semibold">이용약관</h2>
        <div className="mb-4 h-64 space-y-2 overflow-y-auto text-sm text-gray-700">
          <p>
            <strong>제1조 (목적)</strong>
            <br />이 약관은 땅근(이하 "회사"라고 합니다)가 제공하는 서비스의
            이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을
            목적으로 합니다.
          </p>
          <p>
            <strong>제2조 (정의)</strong>
            <br />
            ① "서비스"라 함은 회사가 제공하는 온라인 중고경매거래 플랫폼을
            말합니다.
            <br />② "이용자"라 함은 서비스에 접속하여 이 약관에 따라 회사가
            제공하는 서비스를 받는 회원 및 비회원을 말합니다.
          </p>
          <p>
            <strong>제3조 (약관의 게시 및 개정)</strong>
            <br />
            ① 회사는 이 약관의 내용을 이용자가 알기 쉽도록 서비스 초기 화면에
            게시합니다.
            <br />② 회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할
            수 있습니다.
          </p>
          <p>
            <strong>제4조 (서비스 이용계약)</strong>
            <br />
            이용계약은 회원의 약관 동의 및 회원가입 신청에 대하여 회사의 승낙이
            완료될 때 성립합니다.
          </p>
          <p>
            <strong>제5조 (서비스 제공 및 변경)</strong>
            <br />
            회사는 상당한 이유가 있는 경우 서비스의 일부 또는 전부를 변경할 수
            있으며, 이 경우 사전에 공지합니다.
          </p>
          <p>
            <strong>제6조 (개인정보 보호)</strong>
            <br />
            회사는 이용자의 개인정보를 보호하며, 관련법령에 따라 처리합니다.
          </p>
          <p>
            <strong>제7조 (이용자의 의무)</strong>
            <br />
            이용자는 다음 행위를 하여서는 안 됩니다:
            <br />
            1. 신청 또는 변경 시 허위 내용 등록
            <br />
            2. 타인의 정보 도용
            <br />
            3. 서비스 운영을 방해하는 행위
          </p>
          <p>
            <strong>제8조 (저작권)</strong>
            <br />
            회사가 작성한 저작물에 대한 저작권 및 지적재산권은 회사에
            귀속합니다.
          </p>
          <p>
            <strong>제9조 (해지 및 이용제한)</strong>
            <br />
            이용자는 언제든지 서비스 이용계약을 해지할 수 있으며, 회사는
            이용자가 약관을 위반할 경우 이용을 제한할 수 있습니다.
          </p>
          <p>
            <strong>제10조 (면책)</strong>
            <br />
            회사는 서비스 이용과 관련하여 이용자에게 발생한 손해에 대하여 회사의
            고의 또는 중대한 과실이 없는 한 책임을 지지 않습니다.
          </p>
        </div>
        <button
          onClick={onClose}
          className="bg-maincolor-500 hover:bg-maincolor-300 mt-2 w-full rounded px-4 py-2 text-white"
        >
          닫기
        </button>
      </div>{" "}
    </div>
  );
}
