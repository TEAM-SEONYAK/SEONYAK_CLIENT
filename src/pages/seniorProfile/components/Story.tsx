import { FullBtn } from '@components/commons/FullButton';
import Textarea from '@components/commons/Textarea';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { useValidation } from '@pages/seniorProfile/hook';
import { funnelComponentPropType } from '@pages/seniorProfile/types';
import { useEffect, useState } from 'react';

const Story = ({ profile, setProfile, setStep }: funnelComponentPropType) => {
  const [story, setStory] = useState(profile?.story + '');
  const { isNextActive, isWarning } = useValidation(story, 200);
  const handleChangeStory = (inputVal: string) => {
    setStory(inputVal);
  };

  const handleNextButton = () => {
    setStep && setStep((prev) => prev + 1);
  };

  useEffect(() => {
    setProfile &&
      setProfile((prev) => ({
        ...prev,
        story,
      }));
  }, [story]);

  return (
    <>
      <Container>
        <Textarea
          placeholder="최대 200자까지 작성이 가능해요"
          wordLimit={200}
          height={24}
          inputVal={story}
          handleInputVal={handleChangeStory}
        />
        <WarnDescription isShown={isWarning} warnText="글자 수가 초과되었어요" />
      </Container>
      <FullBtn isActive={isNextActive} text="다음으로" onClick={handleNextButton} />
    </>
  );
};

export default Story;

const Container = styled.section`
  padding: 2rem;
`;
