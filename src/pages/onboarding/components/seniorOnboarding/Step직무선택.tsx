import { DropdownIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { Caption, InputBox, TextBox } from '../TextBox';
import { FullBtn } from '@components/commons/FullButton';
import { useContext } from 'react';
import { StepContext } from '@pages/onboarding/OnboardingPage';

const Step직무선택 = () => {
  const { onNext } = useContext(StepContext);
  return (
    <Container>
      <Wrapper>
        <SubTitle>직무</SubTitle>
        <SelectWrapper onClick={() => console.log('열기')}>
          <SelectBtn>직무를 선택해주세요</SelectBtn>
          <DropdownIcon />
        </SelectWrapper>
      </Wrapper>
      <TextBox label="세부 직무">
        <InputBox label="세부 직무" placeholder="Product Designer & Prdouct Manager"></InputBox>
        <Caption>재직 중인 회사에서의 구체적인 직무를 작성해 주세요</Caption>
      </TextBox>
      <FullBtn isActive onClick={onNext} />
    </Container>
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
`;

const SelectBtn = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.1rem;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleMG2};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const DropdownIcon = styled(DropdownIc)`
  position: absolute;
  right: 0;

  margin-right: 1rem;
`;
