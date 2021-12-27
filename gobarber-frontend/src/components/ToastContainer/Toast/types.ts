// types from hook
import { ToastMessage } from '../../../hooks/types';

export interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  description?: boolean;
  hasDescription?: boolean;
}

export interface ToastProps {
  message: ToastMessage;
  // style: object;
}
