export interface LoginRequest {
  login: string;
  password: string;
}

export interface LoginResponse {
  access_token?: string;
  error?: string;
}

export interface RegistrationRequest {
  login: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface RegistrationResponse {
  success: boolean;
  id?: number;
  error?: string;
}
