import styled from '@emotion/styled';
import { ArrowLeftIc } from '@assets/svgs';
import LogoIc from '@assets/svgs/ic_main_logo.svg?react';
import { FullBtn } from '@components/commons/FullButton';
import { Header } from '@components/commons/Header';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import PreView from '@pages/seniorProfile/components/preView';
import { SENIOR_PROFILE_STEPS } from '@pages/seniorProfile/constants';
import { useSeniorCardQuery } from '@pages/seniorProfile/hooks/useSeniorCardQuery';
import { Meta } from '@pages/seniorProfile/SeniorProfilePage';
import { useState } from 'react';
import Loading from '@components/commons/Loading';
import { useNavigate } from 'react-router-dom';

const Example = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  const navigate = useNavigate();
  const [seniorId, setSeniorId] = useState(0);
  const { data: data1, isLoading: isLoading1, isError: isError1 } = useSeniorCardQuery('1');
  const { data: data2, isLoading: isLoading2, isError: isError2 } = useSeniorCardQuery('2');
  const { data: data3, isLoading: isLoading3, isError: isError3 } = useSeniorCardQuery('3');

  const dummayData = [data1, data2, data3];

  const handleCardClick = (seniorId: number) => {
    setSeniorId(seniorId);
  };

  if (isError1 || isError2 || isError3) navigate('/error');
  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;

  return (
    <>
      {seniorId ? (
        <>
          <Header LeftSvg={ArrowLeftIc} onClickLeft={() => setSeniorId(0)} />
          <PreView seniorId={seniorId + ''} variant="secondary" />
        </>
      ) : (
        <>
          <Wrapper>
            <IconContainer>
              <LogoIcon />
            </IconContainer>
            <Meta>{SENIOR_PROFILE_STEPS[1].meta}</Meta>
            <SeniorListWrapper>
              {dummayData.map((d, idx) => (
                <CardWrapper key={idx} onClick={() => handleCardClick(idx + 1)}>
                  <SeniorCard
                    nickname={d?.nickname + ''}
                    company={d?.company + ''}
                    field={d?.field + ''}
                    position={d?.position + ''}
                    detailPosition={d?.detailPosition + ''}
                    level={d?.level + ''}
                    variant="secondary"
                    image={d?.image}
                  />
                </CardWrapper>
              ))}
            </SeniorListWrapper>
          </Wrapper>
          <FullBtn
            text="다음으로"
            onClick={() => setStep && setStep((prev) => prev + 1)}
            isActive={true}
            isTransparent={true}
          />
        </>
      )}
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

const IconContainer = styled.section`
  padding-bottom: 2.2rem;
`;

const LogoIcon = styled(LogoIc)`
  width: 6.4rem;
`;

const SeniorListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  width: 100%;
  padding-top: 3.4rem;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
