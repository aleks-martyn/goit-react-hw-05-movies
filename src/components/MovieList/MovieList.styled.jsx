import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-top: 30px;
  padding-right: 40px;
  padding-left: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: grey;
`;

export const List = styled.ul`
  padding-top: 30px;
  list-style: disc;
  color: #0c6aad;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: #0c6aad;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: blue;
    border-bottom: 1px solid blue;
  }
`;

export const NotFoundText = styled.h4`
  color: #000;
`;
