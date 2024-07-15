import { ImgSbdetail1Ic } from '@assets/svgs';
import styled from '@emotion/styled';
import React from 'react';

interface SeniorProps {
  senior: string;
}

// 로그인 기능 붙여지면 선배 이름 가져오기 수정
const Banner: React.FC<SeniorProps> = ({ senior = '도리 선배' }) => {
  return (
    <BannerWrapper>
      <Text>
        <SeniorText>{senior}</SeniorText> 님에게
        <br />
        약속 신청을 시작할게요
      </Text>
      <ImgSbdetail1Ic />
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem;
`;

const Text = styled.div`
  ${({ theme }) => theme.fonts.Head1_SB_20};
  padding-left: 2rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const SeniorText = styled.span`
  color: ${({ theme }) => theme.colors.Blue};
`;
