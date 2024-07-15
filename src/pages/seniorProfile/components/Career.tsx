import { FullBtn } from '@components/commons/FullButton';
import Textarea from '@components/commons/Textarea';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { useValidation } from '@pages/seniorProfile/hook';
import { funnelComponentPropType } from '@pages/seniorProfile/types';
import { useEffect, useState } from 'react';

const Career = ({ profile, setProfile, setStep }: funnelComponentPropType) => {
  const [career, setCareer] = useState(profile.career + '');
  const { isNextActive: isCareerNext, isWarning: isCareerWarning } = useValidation(career, 60);

  const [award, setAward] = useState(profile.award + '');
  const { isNextActive: isAwardNext, isWarning: isAwardWarning } = useValidation(award, 60);

  const handleChangeCareer = (inputVal: string) => {
    setCareer(inputVal);
  };
  const handleChangeAwards = (inputVal: string) => {
    setAward(inputVal);
  };

  const handleNextButton = () => {
    setStep && setStep((prev) => prev + 1);
  };

  useEffect(() => {
    setProfile &&
      setProfile((prev) => ({
        ...prev,
        career,
        award,
      }));
  }, [career, award]);

  return (
    <>
      <Wrapper>
        <Text>주요 경력 및 이력</Text>
        <Textarea
          placeholder="주요 경력 및 이력을 최대 60자까지 마음껏 작성해주세요"
          wordLimit={60}
          height={10}
          inputVal={career}
          handleInputVal={handleChangeCareer}
        />
        <WarnDescription isShown={isCareerWarning} warnText="글자 수가 초과되었어요" />
        <Text>수상</Text>
        <Textarea
          placeholder="수상 내역을 최대 60자까지 마음껏 작성해주세요"
          wordLimit={60}
          height={10}
          inputVal={award}
          handleInputVal={handleChangeAwards}
        />
        <WarnDescription isShown={isAwardWarning} warnText="글자 수가 초과되었어요" />
      </Wrapper>
      <FullBtn isActive={isCareerNext && isAwardNext} text="다음으로" onClick={handleNextButton} />
    </>
  );
};

export default Career;

const Wrapper = styled.div`
  padding: 2rem 2rem 0;
`;

const Text = styled.p`
  padding: 1.2rem 0 0.6rem;
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;
