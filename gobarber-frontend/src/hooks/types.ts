export interface SignInCredentials {
  email: string;
  password: string;
}

// Auth types
export interface AuthData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}
export interface AuthState {
  token: string;
  user: object;
}

// Toast types
export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}
export interface ToastData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}
