// vendors
import React from 'react';

// styles
import { Container } from './styles';

// types
interface ToolTipProps {
  title: string;
  className?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default ToolTip;
