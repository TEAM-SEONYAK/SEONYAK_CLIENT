import styled from '@emotion/styled';
import React from 'react';

interface SeniorProps {
  senior: string;
}

const Banner: React.FC<SeniorProps> = ({ senior }) => {
  return (
    <Wrapper>
      <Text>
        <SeniorText>{senior}</SeniorText> 님에게
        <br />
        약속 신청을 시작할까요?
      </Text>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 5rem;
  left: 0;

  width: 100%;
  height: 12rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const Text = styled.div`
  ${({ theme }) => theme.fonts.Head1_SB_20};
  padding-left: 2rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const SeniorText = styled.span`
  color: ${({ theme }) => theme.colors.Blue};
`;
