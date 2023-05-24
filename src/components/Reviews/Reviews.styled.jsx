import styled from '@emotion/styled';

export const Wrap = styled.div`
  margin-top: 30px;
  padding-right: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
`;

export const ReviewTitle = styled.h3`
  text-align: center;
`;

export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 30px;
  align-items: center;
`;

export const ReviewListItem = styled.li`
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
`;

export const Author = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const NoReviewsText = styled.p`
  margin-top: 20px;
  text-align: center;
`;
