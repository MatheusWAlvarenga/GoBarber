// vendors
import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';

// types
import { ToastData, ToastMessage } from './types';

// components
import ToastContainer from '../components/ToastContainer';

const Toast = createContext<ToastData>({} as ToastData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };

      setMessages(state => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <Toast.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </Toast.Provider>
  );
};

export function useToast(): ToastData {
  const context = useContext(Toast);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
