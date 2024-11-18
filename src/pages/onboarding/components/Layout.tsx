import styled from '@emotion/styled';
import TitleBox from './TitleBox';
import { ArrowLeftIc } from '../../../assets/svgs';
import { Header } from '../../../components/commons/Header';
import ProgressBar from '../../../components/commons/ProgressBar';
import { JUNIOR_ONBOARDING_STEPS, ONBOARDING_HEADER, SENIOR_ONBOARDING_STEPS } from '../constants';
import convertToGroupStep from '../utils/convertToGroupStep';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { JoinPropType } from '../type';

const Layout = ({ userRole }: { userRole: 'JUNIOR' | 'SENIOR_PENDING' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const step = +location.pathname.slice(18);
  const onboardingStep = userRole === 'SENIOR_PENDING' ? SENIOR_ONBOARDING_STEPS : JUNIOR_ONBOARDING_STEPS;
  const { title, description } = onboardingStep[step ? step - 1 : 0];
  const GROUP_STEP = convertToGroupStep(userRole, step);

  const [data, setData] = useState<JoinPropType>({
    role: userRole,
    isSubscribed: Array(5).fill(false),
    nickname: '',
    image: '',
    phoneNumber: '',
    univName: '',
    field: '',
    departmentList: [],
  });

  useEffect(() => {
    // 리로드 시 1단계로 back
    if (location.pathname.slice(-1) !== '1') {
      userRole === 'SENIOR_PENDING' ? navigate('/seniorOnboarding/1') : navigate('/juniorOnboarding/1');
    }
  }, []);

  if (location.pathname === '/juniorOnboarding/complete') return <Outlet context={{ data }} />;
  return (
    <Wrapper>
      <Header
        title={ONBOARDING_HEADER[GROUP_STEP - 1]}
        LeftSvg={ArrowLeftIc}
        onClickLeft={() => {
          step === 1 ? navigate('/') : navigate(-1);
        }}
      />
      <ProgressBar max={userRole === 'SENIOR_PENDING' ? 4 : 3} current={GROUP_STEP} />
      <MetaContainer>
        <TitleBox title={title} description={description} />
      </MetaContainer>
      <Content>
        <Outlet context={{ data, setData }} />
      </Content>
      <ButtonBg />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: space-between;

  height: 100dvh;
  padding: 5.8rem 0 3.6rem;
`;

const MetaContainer = styled.header`
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem 0;
`;

const Content = styled.section`
  padding: 0;
`;

const ButtonBg = styled.footer`
  position: fixed;
  bottom: 0;

  width: 100vw;
  height: 6.4rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;
