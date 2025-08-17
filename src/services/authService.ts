// services/authService.ts
import { http } from "@/lib/http";
import {
  type SignUpRequest,
  type SignUpResponse,
  type CheckEmailResponse,
  type SignInRequest,
  type SignInResponse,
} from "@/types/auth";

export const authService = {
  signUp(payload: SignUpRequest) {
    return http
      .post<SignUpResponse>("/api/members/signup", payload)
      .then((r) => r.data);
  },
  checkEmail(email: string) {
    return http
      .get<CheckEmailResponse>("/api/members/check-email", {
        params: { email },
      })
      .then((r) => r.data);
  },
  signIn(payload: SignInRequest) {
    return http
      .post<SignInResponse>("/api/members/signin", payload)
      .then((r) => r.data);
  },
};
