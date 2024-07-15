import styled from '@emotion/styled';
import { SENIOR_PROFILE_STEPS } from '@pages/seniorProfile/constants';

const Complete = () => {
  return (
    <Wrapper>
      <Meta>{SENIOR_PROFILE_STEPS[8].meta}</Meta>
      <Description>{SENIOR_PROFILE_STEPS[8].description}</Description>
      <Box />
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
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const Box = styled.div`
  width: 33rem;
  height: 38rem;
  margin-top: 5.2rem;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;
