// types from hook
// import { ToastMessage } from '../../hooks/types';

export interface ToastProps {
  messages: ToastMessage[];
}

export interface ToastMessage {
  id: string;
  type?: 'info' | 'success' | 'error';
  title: string;
  description?: string;
}
