import { DropdownIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { useState } from 'react';

const SelectBox = () => {
  const PLACEHOLDER = '연차를 선택해 주세요';
  const [select, setSelect] = useState('연차를 선택해 주세요');
  return (
    <Wrapper>
      <SubTitle>연차</SubTitle>
      <SelectWrapper>
        <SelectBtn $isSelected={select !== PLACEHOLDER}>{PLACEHOLDER}</SelectBtn>
        <DropdownIcon />
      </SelectWrapper>
    </Wrapper>
  );
};

export default SelectBox;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SubTitle = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  margin-top: 0.4rem;
`;
const SelectBtn = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.1rem;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.grayScaleBG : theme.colors.grayScaleMG2)};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const DropdownIcon = styled(DropdownIc)`
  position: absolute;
  right: 0;

  margin-right: 1rem;
`;
