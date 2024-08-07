import styled from '@emotion/styled';
import React from 'react';

interface SeniorProps {
  senior: string;
}

// 로그인 기능 붙여지면 선배 이름 가져오기 수정
const Banner: React.FC<SeniorProps> = ({ senior = '도리 선배' }) => {
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
