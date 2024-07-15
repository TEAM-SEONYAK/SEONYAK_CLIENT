import { ArrowRightIc, CheckItemIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { 약관_LIST } from '@pages/onboarding/constants';

const Step약관동의 = () => {
  return (
    <Wrapper>
      <ItemWrapper>
        <ItemLeftWrapper>
          <CheckItemIcon />
          <Item>전체 동의</Item>
        </ItemLeftWrapper>
      </ItemWrapper>
      <Line />
      {약관_LIST.map((el, idx) => (
        <ItemWrapper key={el}>
          <ItemLeftWrapper>
            <CheckItemIcon />
            <Item>{el}</Item>
          </ItemLeftWrapper>
          {idx < 2 && <ArrowRightIc />}
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};

export default Step약관동의;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3.8rem;
`;

const ItemLeftWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Item = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const Line = styled.hr`
  width: 100%;
  height: 0.1rem;
  border: 0;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const CheckItemIcon = styled(CheckItemIc)`
  & path {
    fill: ${({ theme }) => theme.colors.grayScaleLG2};
  }
`;
