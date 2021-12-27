// vendors
import React, { ButtonHTMLAttributes } from 'react';

// styles
import { ButtonStyle } from './style';

// type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ButtonStyle type="submit" {...rest}>
    {children}
  </ButtonStyle>
);

export default Button;
