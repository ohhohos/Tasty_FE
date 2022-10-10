import { DiaryHeaderContainer } from './DiaryHeader.styled';

const DiaryHeader = () => {
  return (
    <DiaryHeaderContainer>
      <div className="diary__date">
        <span>2022.06.30</span>
      </div>
      <div className="diary__goal">
        <span>목표칼로리</span>
        <span>2100 kcal</span>
      </div>
    </DiaryHeaderContainer>
  );
};

export default DiaryHeader;
