// vendors
import styled, { css } from 'styled-components';

// components
import ToolTip from '../ToolTip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  max-width: 340px;
  padding: 16px;
  display: flex;
  align-items: center;

  border: 2px solid #232129;
  color: #f4ede8;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: #232129;
    border: 0;
    padding-left: 16px;
    outline: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    color: #666360;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid #ff9000;
      color: #ff9000;

      svg {
        color: #ff9000;
      }
    `}

  ${props =>
    props.isFilled &&
    css`
      svg {
        color: #ff9000;
      }
    `}
`;

export const Error = styled(ToolTip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
