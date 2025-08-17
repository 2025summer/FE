// models/auth.model.ts
import type { SignUpRequest, SignInRequest } from "@/types/auth";

export type FrontSignUpForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  postalCode: string;
  address: string;
  extraAddress: string;
  addressDetail: string;
};

export function toSignUpRequest(f: FrontSignUpForm): SignUpRequest {
  return {
    username: f.username,
    email: f.email,
    password: f.password,
    confirmPassword: f.confirmPassword,
    phoneNumber: f.phone,
    zipcode: f.postalCode,
    address: f.extraAddress ? `${f.address} ${f.extraAddress}` : f.address,
    detailAddress: f.addressDetail,
  };
}

export type FrontSignInForm = {
  email: string;
  password: string;
};

export function toSignInRequest(f: FrontSignInForm): SignInRequest {
  return { email: f.email, password: f.password };
}
