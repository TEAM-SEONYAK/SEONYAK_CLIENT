import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NaviLookBlackIc, NaviPromiseBlackIc, NaviMyBlackIc } from '../../assets/svgs';

type UserRole = 'JUNIOR' | 'SENIOR';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userRole, setUserRole] = useState<UserRole>('JUNIOR');
  const [currNav, setCurrNav] = useState(location.pathname);

  useEffect(() => {
    if (currNav !== location.pathname) {
      navigate(currNav);
    }
  }, [currNav, navigate, location.pathname]);

  // 유저가 선배일 경우 접근 가능한 곳 : 나의 약속
  // 유저가 후배일 경우 접근 가능한 곳 : 둘러보기, 나의 약속
  // 접근 불가능한 곳은 클릭 안되고, 라우팅 처리 안됨
  const handleOnClickNav = (nav: string) => {
    if (userRole === 'JUNIOR') {
      if (nav === '둘러보기') {
        setCurrNav('/juniorPromise');
      } else if (nav === '나의 약속') {
        setCurrNav('/');
      }
    } else if (userRole === 'SENIOR') {
      if (nav === '나의 약속') {
        setCurrNav('/');
      }
    }
  };

  return (
    <Wrapper>
      <TapContainer
        onClick={() => userRole === 'JUNIOR' && handleOnClickNav('둘러보기')}
        disabled={userRole === 'SENIOR'}>
        <NaviLookBlackIcon isActive={currNav === '/juniorPromise'} />
        <TapContent $isActive={currNav === '/juniorPromise'}>둘러보기</TapContent>
      </TapContainer>
      <TapContainer onClick={() => handleOnClickNav('나의 약속')}>
        <NaviPromiseBlackIcon isActive={currNav === '/'} />
        <TapContent $isActive={currNav === '/'}>나의 약속</TapContent>
      </TapContainer>
      <TapContainer onClick={() => userRole === 'JUNIOR' && handleOnClickNav('마이페이지')} disabled={true}>
        <NaviMyBlackIcon isActive={currNav === '마이페이지'} />
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

const TapContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const TapContent = styled.span<{ $isActive: boolean }>`
  width: fit-content;
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grayScaleBG : theme.colors.grayScaleMG1)};
  ${({ theme }) => theme.fonts.navigation};
`;

const NaviLookBlackIcon = styled(NaviLookBlackIc)<{ isActive: boolean }>`
  stroke: ${({ isActive }) => (isActive ? 'rgba(39, 39, 45, 1)' : 'rgba(197, 197, 197, 1)')};
`;

const NaviPromiseBlackIcon = styled(NaviPromiseBlackIc)<{ isActive: boolean }>`
  stroke: ${({ isActive }) => (isActive ? 'rgba(39, 39, 45, 1)' : 'rgba(197, 197, 197, 1)')};
`;

const NaviMyBlackIcon = styled(NaviMyBlackIc)<{ isActive: boolean }>`
  stroke: ${({ isActive }) => (isActive ? 'rgba(39, 39, 45, 1)' : 'rgba(197, 197, 197, 1)')};
`;
