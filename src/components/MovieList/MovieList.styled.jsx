import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledSection = styled.section`
  padding-right: 40px;
  padding-left: 40px;
`;

export const SectionTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 5px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: grey;
`;

export const List = styled.ul`
  list-style: disc;
  color: teal;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 20px;
  color: teal;
  transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: blue;
    border-bottom: 2px solid blue;
  }
`;
