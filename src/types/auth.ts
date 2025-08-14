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

export type SignUpResponse = { id: number; email: string; username: string };
export type CheckEmailResponse = { available: boolean };
