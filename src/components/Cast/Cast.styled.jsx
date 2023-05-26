import styled from '@emotion/styled';

export const Wrap = styled.div`
  margin-top: 30px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 40px;
`;

export const CastTitle = styled.h3`
  text-align: center;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 30px;
  align-items: center;
`;

export const CastListItem = styled.li`
  width: calc((100% - 4 * 40px) / 5);
  height: 350px;
  word-wrap: break-word;
`;

export const CastInfo = styled.div`
  margin-top: 20px;
`;

export const CastName = styled.h4`
  margin-bottom: 10px;
`;

export const NoCastText = styled.p`
  margin-top: 20px;
  text-align: center;
`;
