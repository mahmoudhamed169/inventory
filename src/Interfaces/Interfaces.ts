export interface ForgetPasswordIn {
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
}
export interface ResetRequest {
  newPassword: "string";
  confirmPassword: "string";
  email: "string";
  otpCode: "string";
}
