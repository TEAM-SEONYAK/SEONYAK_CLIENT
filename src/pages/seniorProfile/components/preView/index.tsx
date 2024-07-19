import { FullBtn } from '@components/commons/FullButton';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import { useSeniorTimeQuery } from '@pages/juniorPromise/hooks/queries';
import ImgTextBox from '@pages/seniorProfile/components/preView/ImgTextBox';
import ProfileSummary from '@pages/seniorProfile/components/preView/ProfileSummary';
import Review from '@pages/seniorProfile/components/preView/Review';
import TimeTable from '@pages/seniorProfile/components/preView/TimeTable';
import { useGetSeniorProfileQuery } from '@pages/seniorProfile/hooks/useGetSeniorProfileQuery';
import { useSeniorCardQuery } from '@pages/seniorProfile/hooks/useSeniorCardQuery';
import useSeniorProfileHook from '@pages/seniorProfile/hooks/useSeniorProfileQuery';
import { dayOfWeekTimeList, seniorProfileRegisterType } from '@pages/seniorProfile/types';
import { deleteProfileField } from '@pages/seniorProfile/utils/deleteProfileField';
import { weekToDay } from '@pages/seniorProfile/utils/weekToDay';
import { useNavigate } from 'react-router-dom';

interface preViewPropType {
  seniorId: string;

  profile?: seniorProfileRegisterType;
  setStep?: React.Dispatch<React.SetStateAction<number>>;

  variant?: 'default' | 'secondary';
}

const PreView = ({ seniorId, profile, setStep, variant = 'default' }: preViewPropType) => {
  const { data: cardData, error: cardDataError, isLoading: isCardDataLoading } = useSeniorCardQuery(seniorId);
  const {
    data: profileData,
    error: profileDataError,
    isLoading: isProfileDataLoading,
  } = useGetSeniorProfileQuery(seniorId);
  const {
    data: secondaryPreferredTimeList,
    isError: secondTimeListError,
    isLoading: isSecondTimeListLoading,
  } = useSeniorTimeQuery(+seniorId);
  const navigate = useNavigate();
  const isRegister = variant === 'default';

  const career = (isRegister ? profile?.career : profileData?.career) + '';
  const award = (isRegister ? profile?.award : profileData?.award) + '';
  const catchphrase = (isRegister ? profile?.catchphrase : profileData?.catchphrase) + '';
  const story = (isRegister ? profile?.story : profileData?.story) + '';
  const preferredTimeList = (
    isRegister ? profile && weekToDay(profile.isDayOfWeek, profile.preferredTimeList) : secondaryPreferredTimeList
  ) as dayOfWeekTimeList;

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
          setStep && setStep((prev) => prev + 1);
        },
      },
    );
  };

  if (
    cardDataError ||
    profileDataError ||
    secondTimeListError ||
    (!isCardDataLoading && !cardData) ||
    (!isRegister && !isProfileDataLoading && !profileData) ||
    (!isRegister && !isSecondTimeListLoading && !secondaryPreferredTimeList)
  ) {
    navigate('/error');
    return null;
  }

  if (isSecondTimeListLoading) return;
  return (
    <>
      <Wrapper>
        {cardData && (
          <SeniorCard
            nickname={cardData.nickname}
            company={cardData.company}
            field={cardData.field}
            position={cardData.position}
            detailPosition={cardData.detailPosition}
            level={cardData.level}
            image={cardData.image}
          />
        )}
        <ProfileSummary description1="미제공" description2={1} description3="미제공" />
        <Meta>선배의 이력 · 수상</Meta>
        <ImgTextBox variant="career" text={career} />
        <ImgTextBox variant="award" text={award} />
        <Meta2>{catchphrase}</Meta2>
        <Description>{story}</Description>
        {!isRegister && <Review />}
        <Meta2>선배의 타임 테이블</Meta2>
        <TimeTable preferredTime={preferredTimeList} />
      </Wrapper>
      {isRegister && <FullBtn text="프로필 등록하기" onClick={handleRegisterClick} isActive />}
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
