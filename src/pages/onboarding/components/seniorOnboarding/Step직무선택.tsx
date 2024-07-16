import { DropdownIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { Caption, InputBox, TextBox } from '../TextBox';
import { FullBtn } from '@components/commons/FullButton';
import { useContext, useState } from 'react';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import { 세부직무_DESCRIPTION, 세부직무_LIST } from '@pages/onboarding/constants';
import FullBottomSheet from '@pages/onboarding/components/FullBottomSheet';

const Step직무선택 = () => {
  const { onNext } = useContext(StepContext);
  const [selectedDetail, setSelectedDetail] = useState<string>('');
  const [isOpenSheet, setIsOpenSheet] = useState(false);
  const handleSheetClose = () => setIsOpenSheet(false);
  const handleSelectDetails = (selectedValue: string) => {
    setSelectedDetail(selectedValue);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <SubTitle>직무</SubTitle>
          <SelectWrapper onClick={() => setIsOpenSheet(true)}>
            <SelectBtn placeholder="직무를 선택해주세요" value={selectedDetail} />
            <DropdownIcon />
          </SelectWrapper>
        </Wrapper>
        <TextBox label="세부 직무">
          <InputBox label="세부 직무" placeholder="Product Designer & Prdouct Manager"></InputBox>
          <Caption>재직 중인 회사에서의 구체적인 직무를 작성해 주세요</Caption>
        </TextBox>
        <FullBtn isActive onClick={onNext} />
      </Container>
      <FullBottomSheet isSheetOpen={isOpenSheet} handleClose={handleSheetClose}>
        <Sheet직무선택
          selectedDetail={selectedDetail}
          handleSelectDetails={handleSelectDetails}
          handleSheetClose={handleSheetClose}
        />
      </FullBottomSheet>
    </>
  );
};

export default Step직무선택;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-top: 2rem;
`;
const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  cursor: pointer;
`;

const SelectBtn = styled.input`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.1rem;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const DropdownIcon = styled(DropdownIc)`
  position: absolute;
  right: 0;

  margin-right: 1rem;
  fill: ${({ theme }) => theme.colors.grayScaleMG2};
`;

interface Sheet직무선택PropType {
  // eslint-disable-next-line no-unused-vars
  handleSelectDetails: (selectValue: string) => void;
  selectedDetail: string;
  handleSheetClose: () => void;
}

const Sheet직무선택 = ({ handleSelectDetails, selectedDetail, handleSheetClose }: Sheet직무선택PropType) => {
  const handleClick = (list: string) => {
    handleSelectDetails(list);
    handleSheetClose();
  };
  return (
    <>
      <SheetWrapper>
        {세부직무_LIST.map((list) => (
          <PositionList key={list} $isActive={selectedDetail === list} onClick={() => handleClick(list)}>
            <PositionText key={list} $isActive={selectedDetail === list}>
              {list}
            </PositionText>
          </PositionList>
        ))}
      </SheetWrapper>
      <DescriptionContainer>
        <Description>{세부직무_DESCRIPTION}</Description>
      </DescriptionContainer>
    </>
  );
};

const SheetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 1rem;
  z-index: 10;

  width: 33.5rem;
  height: 46.4rem;
  margin: 4.2rem 2rem 0;
`;

const DescriptionContainer = styled.section`
  margin: 1rem 2rem 0;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleMG2};
  white-space: pre-wrap;
  ${({ theme }) => theme.fonts.Caption1_R_12};
`;

const PositionList = styled.section<{ $isActive: boolean }>`
  display: flex;
  align-items: center;

  padding: 0.8rem 1.6rem;
  border: 0.406px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2)};
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryBlue50 : theme.colors.grayScaleLG2)};
`;

const PositionText = styled.p<{ $isActive: boolean }>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleDG)};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;
