// vendors
import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

// types
import { ContainerProps } from './types';

const ToastsTypeVariation = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};
export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  & + div {
    margin-top: 8px;
  }

  ${props => ToastsTypeVariation[props.type || 'info']}

  > svg {
    margin-right: 12px;
    align-items: center;
  }

  div {
    flex: 1;
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.8;
    line-height: 20px;
  }

  button {
    position: absolute;
    right: 8px;
    top: 8px;
    border: none;
    background: transparent;
    color: inherit;
    opacity: 0.6;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
