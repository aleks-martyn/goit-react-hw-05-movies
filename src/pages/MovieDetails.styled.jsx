import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

export const StyledSection = styled.section`
  padding: 20px 35px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
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
