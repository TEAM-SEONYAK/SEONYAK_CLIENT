import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NaviLookBlackIc, NaviPromiseBlackIc, NaviMyBlackIc } from '../../assets/svgs';

const Nav = () => {
  const navigate = useNavigate();

  const userRole = 'JUNIOR';
  const initialNav = userRole === 'JUNIOR' ? '둘러보기' : '나의 약속';
  const [currNav, setCurrNav] = useState(initialNav);

  // 유저가 선배일 경우 접근 가능한 곳 : 나의 약속
  // 유저가 후배일 경우 접근 가능한 곳 : 둘러보기, 나의 약속
  // 접근 불가능한 곳은 클릭 안되고, 라우팅 처리 안됨
  const handleOnClickNav = (nav: string) => {
    setCurrNav(nav);

    switch (nav) {
      case '둘러보기':
        if (userRole === 'JUNIOR') {
          navigate('/juniorPromise');
        } else {
          setCurrNav('나의 약속');
          navigate('/');
        }
        break;
      case '나의 약속':
        setCurrNav('나의 약속');
        navigate('/');
        break;
      case '마이페이지':
        setCurrNav('마이페이지');
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <TapContainer onClick={() => handleOnClickNav('둘러보기')}>
        <NaviLookBlackIcon isactive={(currNav === '둘러보기') + ''} />
        <TapContent $isActive={currNav === '둘러보기'}>둘러보기</TapContent>
      </TapContainer>
      <TapContainer onClick={() => handleOnClickNav('나의 약속')}>
        <NaviPromiseBlackIcon isactive={(currNav === '나의 약속') + ''} />
        <TapContent $isActive={currNav === '나의 약속'}>나의 약속</TapContent>
      </TapContainer>
      <TapContainer onClick={() => handleOnClickNav('나의 약속')}>
        <NaviMyBlackIcon isactive={(currNav === '마이페이지') + ''} />
        <TapContent $isActive={currNav === '마이페이지'}>마이페이지</TapContent>
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
  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const TapContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const TapContent = styled.span<{ $isActive: boolean }>`
  width: fit-content;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grayScaleBG : theme.colors.grayScaleMG1)};
  ${({ theme }) => theme.fonts.navigation};
`;

const NaviLookBlackIcon = styled(NaviLookBlackIc)<{ isactive: string }>`
  stroke: ${({ isactive }) => (isactive === 'true' ? 'rgba(39, 39, 45, 1)' : 'rgba(197, 197, 197, 1)')};
`;
const NaviPromiseBlackIcon = styled(NaviPromiseBlackIc)<{ isactive: string }>`
  stroke: ${({ isactive }) => (isactive === 'true' ? 'rgba(39, 39, 45, 1)' : 'rgba(197, 197, 197, 1)')};
`;
const NaviMyBlackIcon = styled(NaviMyBlackIc)<{ isactive: string }>`
  stroke: ${({ isactive }) => (isactive === 'true' ? 'rgba(39, 39, 45, 1)' : 'rgba(197, 197, 197, 1)')};
`;
