import { ProfileCompleteIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { SENIOR_PROFILE_STEPS } from '@pages/seniorProfile/constants';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Complete = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/promiseList');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Wrapper>
      <Meta>{SENIOR_PROFILE_STEPS[7].meta}</Meta>
      <Description>{SENIOR_PROFILE_STEPS[7].description}</Description>
      <ProfileCompleteIc />
    </Wrapper>
  );
};

export default Complete;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 8rem 2.2rem 6.8rem;
`;

const Meta = styled.p`
  ${({ theme }) => theme.fonts.Head1_B_20};
  padding-bottom: '0.9rem';

  text-align: center;
  white-space: pre-wrap;
`;

const Description = styled.p`
  margin-top: 0.9rem;
  margin-bottom: 5.2rem;

  color: ${({ theme }) => theme.colors.grayScaleMG2};

  ${({ theme }) => theme.fonts.Body1_M_14};
`;
