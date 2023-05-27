import styled from '@emotion/styled';

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 8px;
  margin-right: 15px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 6px 15px;
  color: #fff;
  background-color: #2196f3;
  border: 0;
  border-radius: 3px;

  font-size: 16px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;
