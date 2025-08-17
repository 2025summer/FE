export type SignUpRequest = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  zipcode: string;
  address: string;
  detailAddress: string;
};

export type SignUpResponse = { email: string; username: string };
export type CheckEmailResponse = { available: boolean };

export type SignInRequest = {
  email: string;
  password: string;
};
export type Role = "USER" | "ADMIN"; // 실제 역할에 맞게 확장/축소

export type SignInResponse = {
  token: string;
  username: string;
  email: string;
  role: Role;
};

export type AuthUser = {
  username: string;
  email: string;
  role: string;
};
