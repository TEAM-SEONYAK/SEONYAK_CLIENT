import styled from '@emotion/styled';
import { NaviLookBlackIc, NaviPromiseBlackIc, NaviMyBlackIc } from '../../assets/svgs';

const Nav = () => {
  return (
    <Wrapper>
      <TapContainer>
        <NaviLookBlackIc />
        <TapContent>나의 약속</TapContent>
      </TapContainer>
      <TapContainer>
        <NaviPromiseBlackIc />
        <TapContent>둘러보기</TapContent>
      </TapContainer>
      <TapContainer>
        <NaviMyBlackIc />
        <TapContent>마이페이지</TapContent>
      </TapContainer>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  z-index: 3;

  width: 100vw;
  padding: 0.9rem 5.5rem 1.7rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;

const TapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const TapContent = styled.span`
  width: fit-content;
  ${({ theme }) => theme.fonts.navigation}
`;
