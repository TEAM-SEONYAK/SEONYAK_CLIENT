import styled from '@emotion/styled';
import { 세부직무_DESCRIPTION, 세부직무_LIST } from '@pages/onboarding/constants';
import { useState } from 'react';
import FullBottomSheet from '../FullBottomSheet';

const Step직무선택 = () => {
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const [, setSelectedDetails] = useState<string[]>([]);
  const handleOpenSheet = () => setIsOpenSheet(true);
  const handleCloseSheet = () => setIsOpenSheet(false);
  const handleSelectDetails = (selectedValue: string) => {
    setSelectedDetails((prev) =>
      prev?.includes(selectedValue) ? prev.filter((detail) => detail !== selectedValue) : [...prev, selectedValue],
    );
  };
  return (
    <>
      <div style={{ marginTop: '10rem' }}>
        <button onClick={handleOpenSheet}>BottomSheet 올라간다간다간다뿅!</button>
      </div>
      {isOpenSheet && (
        <FullBottomSheet isSheetOpen={isOpenSheet} handleClose={handleCloseSheet}>
          <Sheet재직인증 handleSelectDetails={handleSelectDetails} />
        </FullBottomSheet>
      )}
    </>
  );
};

export default Step직무선택;

interface Sheet재직인증PropType {
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
