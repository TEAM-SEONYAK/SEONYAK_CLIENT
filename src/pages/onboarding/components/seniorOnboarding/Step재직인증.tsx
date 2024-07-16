import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import FullBottomSheet from '@pages/onboarding/components/BottomSheet';
import { 세부직무_DESCRIPTION, 세부직무_LIST } from '@pages/onboarding/constants';
import { useContext, useState } from 'react';

// 임시코드임니다 승희언니가 갈아끼울 예정이에오
const Step직무선택 = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState<string[]>([]);
  const handleOpenSheet = () => setIsOpenSheet(true);
  const handleCloseSheet = () => setIsOpenSheet(false);
  const handleSelectDetails = (selectedValue: string) => {
    setSelectedDetails((prev) =>
      prev?.includes(selectedValue) ? prev.filter((detail) => detail !== selectedValue) : [...prev, selectedValue],
    );
  };
  const { onNext } = useContext(StepContext);
  return (
    <>
      <div style={{ marginTop: '10rem' }}>
        <button onClick={handleOpenSheet}>BottomSheet 올라간다간다간다뿅!</button>
      </div>
      {isOpenSheet && (
        <FullBottomSheet handleClose={handleCloseSheet}>
          <Sheet재직인증 handleSelectDetails={handleSelectDetails} />
        </FullBottomSheet>
      )}
    </>
  );
};

export default Step직무선택;

interface Sheet재직인증PropType {
  // eslint-disable-next-line no-unused-vars
  handleSelectDetails: (selectValue: string) => void;
}

const Sheet재직인증 = ({ handleSelectDetails }: Sheet재직인증PropType) => {
  return (
    <>
      <Wrapper>
        {세부직무_LIST.map((l) => (
          <Description key={l} onClick={() => handleSelectDetails(l)}>
            {l}
          </Description>
        ))}
      </Wrapper>
      <DescriptionContainer>
        <Description>{세부직무_DESCRIPTION}</Description>
      </DescriptionContainer>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 1rem;

  width: 33.5rem;
  height: 46.4rem;
  margin: 4.2rem 2rem 0;

  background-color: red;
`;

const DescriptionContainer = styled.section`
  margin: 1rem 2rem 0;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleMG2};
  white-space: pre-wrap;
  ${({ theme }) => theme.fonts.Caption1_R_12};
`;
