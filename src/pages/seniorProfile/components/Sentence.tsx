import { FullBtn } from '@components/commons/FullButton';
import Textarea from '@components/commons/Textarea';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { profilePropType } from '@pages/seniorProfile/types';
import { useEffect, useState } from 'react';

const Sentence = ({ setProfile, setStep }: profilePropType) => {
  const [isNextActive, setIsNextActive] = useState(false);
  const [sentence, setSentence] = useState('');
  const [isWarning, setIsWarning] = useState(false);
  console.log({ isWarning });
  const handleChangeSentence = (inputVal: string) => {
    setSentence(inputVal);
  };

  const handleNextButton = () => {
    setProfile &&
      setProfile((prev) => ({
        ...prev,
        catchphrase: sentence,
      }));
    setStep && setStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (sentence.length > 0) {
      setIsNextActive(true);
      if (sentence.length > 30) {
        setIsWarning(true);
        setIsNextActive(false);
      } else setIsWarning(false);
    } else setIsNextActive(false);
  }, [sentence]);

  return (
    <Wrapper>
      <Container>
        <Textarea
          placeholder="최대 30자까지 마음껏 작성해주세요"
          wordLimit={30}
          height={9}
          inputVal={sentence}
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
