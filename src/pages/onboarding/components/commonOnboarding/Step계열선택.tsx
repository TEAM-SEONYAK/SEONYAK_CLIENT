import { CheckItemIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { StepContext } from '@pages/onboarding/OnboardingPage';
import { 계열_LIST } from '@pages/onboarding/constants';
import { useContext } from 'react';

const Step계열선택 = () => {
  const { onNext } = useContext(StepContext);
  return (
    <Wrapper>
      {계열_LIST.map((el) => (
        <ItemWrapper key={el}>
          <Item>
            <Icon />
            {el}
          </Item>
          <CheckItemIc />
        </ItemWrapper>
      ))}
      <FullBtn isActive onClick={onNext} />
    </Wrapper>
  );
};

export default Step계열선택;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 2rem;
`;

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.8rem;
  padding: 1rem 1.5rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;
const Item = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const Icon = styled.i`
  width: 2.3rem;
  height: 2.3rem;

  background-color: ${({ theme }) => theme.colors.grayScaleBlack};
`;
