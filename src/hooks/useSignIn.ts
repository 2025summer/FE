import { useState } from "react";
import { authService } from "@/services/authService";
import { toSignInRequest, type FrontSignInForm } from "@/models/auth.model";
import { tokenStorage, USER_INFO_KEY, USER_TYPE_KEY } from "@/lib/http";

export function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(form: FrontSignInForm) {
    setLoading(true);
    setError(null);
    try {
      const res = await authService.signIn(toSignInRequest(form));
      // 1) 토큰 저장
      tokenStorage.set(res.token);
      // 2) 사용자 정보 저장(선택)
      localStorage.setItem(
        USER_INFO_KEY,
        JSON.stringify({
          username: res.username,
          email: res.email,
          role: res.role,
        }),
      );
      localStorage.setItem(USER_TYPE_KEY, res.role);

      return { ok: true as const, user: res };
    } catch (e: any) {
      setError(e.message);
      return { ok: false as const };
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    tokenStorage.clear();
  }

  return { loading, error, onSubmit, logout };
}
