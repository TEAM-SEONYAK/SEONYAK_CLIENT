import LogoIc from '@assets/svgs/ic_main_logo.svg?react';
import { FullBtn } from '@components/commons/FullButton';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import { SENIOR_PROFILE_STEPS } from '@pages/seniorProfile/constants';
import { Meta } from '@pages/seniorProfile/SeniorProfilePage';
import { funnelComponentPropType } from '@pages/seniorProfile/types';

const Example = ({ setStep }: funnelComponentPropType) => {
  return (
    <>
      <Wrapper>
        <LogoIcon />
        <Meta>{SENIOR_PROFILE_STEPS[1].meta}</Meta>
        <CardContainer>
          <SeniorCard
            nickname="도리야끼다요"
            company="비바리퍼블리카 (토스)"
            field="예체능 계열"
            position="디자인"
            detailPosition="프로덕트그래픽 디자이너"
            level={1}
            variant="secondary"
          />
          <SeniorCard
            nickname="도리야끼다요"
            company="비바리퍼블리카 (토스)"
            field="예체능 계열"
            position="디자인"
            detailPosition="프로덕트그래픽 디자이너"
            level={1}
            variant="secondary"
          />
          <SeniorCard
            nickname="도리야끼다요"
            company="비바리퍼블리카 (토스)"
            field="예체능 계열"
            position="디자인"
            detailPosition="프로덕트그래픽 디자이너"
            level={1}
            variant="secondary"
          />
        </CardContainer>
      </Wrapper>
      <FullBtn
        text="다음으로"
        onClick={() => setStep && setStep((prev) => prev + 1)}
        isActive={true}
        isTransparent={true}
      />
    </>
  );
};

export default Example;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem 2rem 0;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
`;

const LogoIcon = styled(LogoIc)`
  width: 6.4rem;
  margin-bottom: 2.2rem;
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 3rem 0 0;
`;
