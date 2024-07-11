import { ResetIc, Line292Ic } from '@assets/svgs';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { FilterButton } from './FilterButton';

interface SeniorListBackgroundProps {
  children: ReactNode;
  turnFieldState: () => void;
  turnPositionState: () => void;
}

export const SeniorListBackground: React.FC<SeniorListBackgroundProps> = ({
  children,
  turnFieldState,
  turnPositionState,
}) => {
  return (
    <ListBackground>
      <SeniorSearchWrapper>
        <SearchTitle>선배를 찾아볼까요?</SearchTitle>
        <BtnLayout>
          <FilterButton turnFieldState={turnFieldState} turnPositionState={turnPositionState} />
          <LineWrapper>
            <Line292Ic />
          </LineWrapper>
          <ResetIc />
        </BtnLayout>
      </SeniorSearchWrapper>
      {children}
    </ListBackground>
  );
};

const ListBackground = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem 0 2rem;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWG};
`;

const SeniorSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchTitle = styled.h2`
  display: flex;
  align-items: center;

  padding: 1rem 21.8rem 0.9rem 2rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const BtnLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.7rem 2rem;
`;

const LineWrapper = styled.div`
  padding-left: 13.7rem;
`;
