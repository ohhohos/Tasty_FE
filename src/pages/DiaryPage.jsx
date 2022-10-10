import AppLayout from '../components/layouts/AppLayout';
import DiaryHeader from '../components/diary/DiaryHeader';
import DiaryContent from '../components/diary/DiaryContent';

const Diarypage = () => {
  return (
    <AppLayout>
      <DiaryHeader />
      <hr />
      <DiaryContent />
    </AppLayout>
  );
};

export default Diarypage;
