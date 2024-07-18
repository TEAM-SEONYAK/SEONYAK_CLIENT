import { FullBtn } from '@components/commons/FullButton';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import ImgTextBox from '@pages/seniorProfile/components/preView/ImgTextBox';
import ProfileSummary from '@pages/seniorProfile/components/preView/ProfileSummary';
import TimeTable from '@pages/seniorProfile/components/preView/TimeTable';
import { useSeniorCardQuery } from '@pages/seniorProfile/hooks/useSeniorCardQuery';
import useSeniorProfileHook from '@pages/seniorProfile/hooks/useSeniorProfileQuery';
import { dayOfWeekTimeList } from '@pages/seniorProfile/types';
import { deleteProfileField } from '@pages/seniorProfile/utils/deleteProfileField';
import { useNavigate } from 'react-router-dom';

interface preViewPropType {
  seniorId: string;

  career: string;
  award: string;
  catchphrase: string;
  story: string;

  preferredTimeList: dayOfWeekTimeList;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PreView = ({ seniorId, career, award, catchphrase, story, preferredTimeList, setStep }: preViewPropType) => {
  const { data: cardData, error, isLoading } = useSeniorCardQuery(seniorId);
  const navigate = useNavigate();
  if (error || (!isLoading && !cardData)) {
    navigate('/error');
    return null;
  }

  const mutation = useSeniorProfileHook();
  const handleRegisterClick = () => {
    mutation.mutate(
      {
        catchphrase,
        career,
        award,
        story,
        preferredTimeList: deleteProfileField(preferredTimeList),
      },
      {
        onSuccess: () => {
          setStep((prev) => prev + 1);
        },
      },
    );
  };
  return (
    <>
      <Wrapper>
        <SeniorCard
          nickname={cardData?.nickname + ''}
          company={cardData?.company + ''}
          field={cardData?.field + ''}
          position={cardData?.position + ''}
          detailPosition={cardData?.detailPosition + ''}
          level={cardData?.level + ''}
        />
        <ProfileSummary description1="미제공" description2={1} description3="미제공" />
        <Meta>선배의 이력 · 수상</Meta>
        <ImgTextBox variant="career" text={career} />
        <ImgTextBox variant="award" text={award} />
        <Meta2>{catchphrase}</Meta2>
        <Description>{story}</Description>
        <Meta2>선배의 타임 테이블</Meta2>
        <TimeTable preferredTime={preferredTimeList} />
      </Wrapper>
      <FullBtn text="프로필 등록하기" onClick={handleRegisterClick} isActive />
    </>
  );
};

export default PreView;

const Wrapper = styled.div`
  overflow-y: scroll;

  padding: 0 2rem 12.6rem;
`;

const Meta = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  padding-top: 3rem;
`;

const Meta2 = styled.p`
  width: 19.9rem;
  padding: 3.6rem 0 1.2rem;
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const Loading = styled.div`
  padding-top: 3rem;

  text-align: center;

  ${({ theme }) => theme.fonts.Title1_SB_16};
`;
