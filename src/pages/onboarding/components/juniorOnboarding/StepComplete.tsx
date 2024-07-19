import { ProfileCompleteImg } from '@assets/images';
import styled from '@emotion/styled';
import { JoinContextType } from '@pages/onboarding/type';
import { useOutletContext } from 'react-router-dom';

const StepComplete = () => {
  const { data } = useOutletContext<JoinContextType>();

  return (
    <Wrapper>
      <Title>
        {data.nickname} 후배님
        <br />
        반가워요!
      </Title>
      <Description>바로 선약을 시작하고, 선배와 약속을 잡아보세요</Description>
      <Img src={ProfileCompleteImg} alt="" />
    </Wrapper>
  );
};

export default StepComplete;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100dvh;

  text-align: center;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Head1_B_20};
`;

const Description = styled.p`
  margin: 0.9rem 0 5.2rem;

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;

const Img = styled.img`
  width: 33.1rem;
`;
