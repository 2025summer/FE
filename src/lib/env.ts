export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:8080/api";

if (!process.env.NEXT_PUBLIC_API_BASE) {
  console.warn(
    "[환경변수 경고] NEXT_PUBLIC_API_BASE가 비어있어 기본값을 사용합니다.",
  );
}
