import styled from '@emotion/styled';
import { BsArrowLeftShort } from 'react-icons/bs';

export const Wrap = styled.div`
  padding: 20px 35px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 15px;
  height: 30px;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  color: #fff;
  background-color: #2196f3;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;

export const LeftArrow = styled(BsArrowLeftShort)`
  width: 25px;
  height: 25px;
  display: inline-block;
`;
