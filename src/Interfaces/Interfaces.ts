export interface ForgetPasswordIn {
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  isSuccess: boolean;
  data: string;
  message: string;
  errorCode: number;
}

export interface ResetRequest {
  newPassword: "string";
  confirmPassword: "string";
  email: "string";
  otpCode: "string";
}
