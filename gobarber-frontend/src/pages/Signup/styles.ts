// vendors
import styled, { css } from 'styled-components';
import { shade } from 'polished';

// imagens
import signupBackground from '../../assets/sign-up-background.png';

// Types
interface SelectorProps {
  selector: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600%;
  max-width: 600px;

  form {
    margin: 8px 0 24px;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin: 16px 0 8px;
  }

  a {
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  > a {
    color: #f4ede8;
    display: flex;
    text-decoration: none;
    transition: color 0.2s;
    align-items: center;

    svg {
      margin-right: 8px;
    }

    &:hover {
      color: ${shade(0.2, '#FF9000')};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signupBackground}) no-repeat center;
  background-size: cover;
`;

export const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0 16px;
  gap: 24px;
  color: #999591;
`;

export const Client = styled.a<SelectorProps>`
  padding-bottom: 8px;
  color: #999591;
  font-weight: 500;

  ${props =>
    props.selector &&
    css`
      border-bottom: 2px solid #ff9000;
      color: #f4ede8;
    `}
`;
export const Provider = styled.a<SelectorProps>`
  padding-bottom: 8px;
  color: #f4ede8;
  font-weight: 500;
  border-bottom: 2px solid #ff9000;

  ${props =>
    props.selector &&
    css`
      border-bottom: 2px solid transparent;
      color: #999591;
    `}
`;
