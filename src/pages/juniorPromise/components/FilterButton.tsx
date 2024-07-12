import styled from '@emotion/styled';
import React from 'react';
import { ArrowDownIc } from '../../../assets/svgs/index';
interface FilterButtonProps {
  onField: () => void;
  onPosition: () => void;
  // eslint-disable-next-line no-unused-vars
  handleFilterActiveBtn: (btnText: string) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ onField, onPosition, handleFilterActiveBtn }) => {
  return (
    <FilterBtnContainer>
      <FilterBtn type="button" onClick={() => handleFilterActiveBtn('계열')}>
        계열
        <ArrowDownIc />
      </FilterBtn>
      <FilterBtn type="button" onClick={() => handleFilterActiveBtn('직무')}>
        직무
        <ArrowDownIc />
      </FilterBtn>
    </FilterBtnContainer>
  );
};
const FilterBtnContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const FilterBtn = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  width: 6.3rem;
  padding: 0.8rem 1rem;
  border-radius: 6px;

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;
