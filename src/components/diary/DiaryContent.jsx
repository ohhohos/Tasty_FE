import { diary } from '../../constant/homeData';
import * as S from './DiaryContent.styled';

const DiaryContent = () => {
  return (
    <S.DiaryContentContainer>
      <S.DiaryContent>
        <S.DiaryButton>
          {diary.map(({ to, name }) => (
            <S.DiaryContentLink key={name} to={to}>
              {name}
            </S.DiaryContentLink>
          ))}
        </S.DiaryButton>
      </S.DiaryContent>
      <div>summary</div>
    </S.DiaryContentContainer>
  );
};

export default DiaryContent;
