import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieWrap = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;

export const MovieInfoWrap = styled.div`
  padding-top: 20px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
`;

export const MovieSubTitle = styled.h3`
  margin-bottom: 20px;
`;

export const MovieText = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const MoreInfoWrap = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
`;

export const LinksList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  font-size: 18px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  margin: 0;
  padding: 6px 15px;
  border: 0;
  border-radius: 3px;
  color: #fff;
  background-color: #2196f3;
  font-size: 16px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #188ce8;
  }
`;
