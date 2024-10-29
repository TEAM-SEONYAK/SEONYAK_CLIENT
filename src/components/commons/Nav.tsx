import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NaviLookBlackIc, NaviPromiseBlackIc, NaviMyBlackIc } from '../../assets/svgs';
import { getRole } from '@utils/storage';
import { AutoCloseModal } from './modal/AutoCloseModal';
import { ComingSoonImg } from '@assets/images';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userRole = getRole();
  const [currNav, setCurrNav] = useState(location.pathname);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (currNav !== location.pathname) {
      navigate(currNav);
    }
  }, [currNav, location.pathname]);

  // 유저가 선배일 경우 접근 가능한 곳 : 나의 약속
  // 유저가 후배일 경우 접근 가능한 곳 : 둘러보기, 나의 약속
  // 접근 불가능한 곳은 클릭 안되고, 라우팅 처리 안됨
  const handleOnClickNav = (nav: string) => {
    switch (nav) {
      case '둘러보기':
        userRole === 'JUNIOR' ? setCurrNav('/juniorPromise') : setShowModal(true);
        break;
      case '나의 약속':
        setCurrNav('/promiseList');
        break;
      case '마이페이지':
        setShowModal(true);
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <TapContainer onClick={() => handleOnClickNav('둘러보기')} $disabled={userRole === 'SENIOR'}>
          <NaviLookBlackIcon isactive={(currNav === '/juniorPromise') + ''} />
          <TapContent $isActive={currNav === '/juniorPromise'}>둘러보기</TapContent>
        </TapContainer>
        <TapContainer onClick={() => handleOnClickNav('나의 약속')}>
          <NaviPromiseBlackIcon isactive={(currNav === '/promiseList') + ''} />
          <TapContent $isActive={currNav === '/promiseList'}>나의 약속</TapContent>
        </TapContainer>
        <TapContainer onClick={() => handleOnClickNav('마이페이지')} $disabled={true}>
          <NaviMyBlackIcon isactive={(currNav === '마이페이지') + ''} />
          <TapContent $isActive={currNav === '마이페이지'}>마이페이지</TapContent>
        </TapContainer>
      </Wrapper>

      <AutoCloseModal
        text="아직 준비중인 기능이에요"
        showModal={showModal}
        handleShowModal={(type: boolean) => setShowModal(type)}>
        <img src={ComingSoonImg} alt="준비중인 기능 모달" />
      </AutoCloseModal>
    </>
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

const TapContainer = styled.div<{ $disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
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
