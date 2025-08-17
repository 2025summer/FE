// hooks/useSignUp.ts
import { useState } from "react";
import { authService } from "@/services/authService";
import { toSignUpRequest, type FrontSignUpForm } from "@/models/auth.model";

export function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onCheckEmail(email: string) {
    try {
      const { available } = await authService.checkEmail(email);
      setEmailAvailable(available);
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function onSubmit(form: FrontSignUpForm) {
    setLoading(true);
    setError(null);
    try {
      await authService.signUp(toSignUpRequest(form));
      return { ok: true };
    } catch (e: any) {
      setError(e.message);
      return { ok: false };
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, emailAvailable, onCheckEmail, onSubmit };
}
