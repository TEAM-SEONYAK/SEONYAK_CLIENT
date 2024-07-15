import { FullBtn } from '@components/commons/FullButton';
import Textarea from '@components/commons/Textarea';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { useValidation } from '@pages/seniorProfile/hook';
import { funnelComponentPropType } from '@pages/seniorProfile/types';
import { useEffect, useState } from 'react';

const Sentence = ({ profile, setProfile, setStep }: funnelComponentPropType) => {
  const [catchphrase, setCatchphrase] = useState(profile?.catchphrase + '');
  const { isNextActive, isWarning } = useValidation(catchphrase, 30);
  const handleChangeSentence = (inputVal: string) => {
    setCatchphrase(inputVal);
  };

  const handleNextButton = () => {
    setStep && setStep((prev) => prev + 1);
  };

  useEffect(() => {
    setProfile((prev) => ({
      ...prev,
      catchphrase,
    }));

    console.log({ catchphrase });
    console.log({ isWarning });
  }, [catchphrase]);

  return (
    <Wrapper>
      <Container>
        <Textarea
          placeholder="최대 30자까지 마음껏 작성해주세요"
          wordLimit={30}
          height={9}
          inputVal={catchphrase}
          handleInputVal={handleChangeSentence}
        />
        <WarnDescription isShown={isWarning} warnText="글자 수가 초과되었어요" />
      </Container>
      <FullBtn isActive={isNextActive} text="다음으로" onClick={handleNextButton} />
    </Wrapper>
  );
};

export default Sentence;

const Wrapper = styled.div`
  padding-top: 1.6rem;
`;

const Container = styled.section`
  padding: 0 2rem;
`;
