// vendors
import styled from 'styled-components';
import { shade } from 'polished';

export const ButtonStyle = styled.button`
  background: #ff9000;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 16px;
  width: 100%;
  color: #312e38;
  margin: 24px 0 24px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
