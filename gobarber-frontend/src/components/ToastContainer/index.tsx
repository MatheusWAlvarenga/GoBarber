// vendors
import React from 'react';
import { useTransition } from 'react-spring';

// components
import Toast from './Toast';

// styles
import { Container } from './styles';

// types
import { ToastProps } from './types';

const ToastContainer: React.FC<ToastProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
