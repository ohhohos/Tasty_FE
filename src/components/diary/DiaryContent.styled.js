import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DiaryContentContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DiaryContent = styled.div`
  width: 75%;
`;

export const DiaryContentLink = styled(Link)`
  width: 33%;
  background-color: white;
  padding: 10px 20px;
  width: 100%;
  font-size: 18px;
  font-weight: 300;
  border: solid 0.5px #3f4b59;
  color: #3f4b59;
  display: flex;
  justify-content: flex-start;
`;

export const DiaryButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
