import styled from '@emotion/styled';
import { useState } from 'react';
import ArrowDownIc from '../../../../assets/svgs/ic_arrow_down_mg.svg?react';

interface DropDownPropType {
  variant?: 'default' | 'secondary';
  defaultValue?: '시작 시간' | '마지막 시간';
}

const DropDown = ({ variant = 'default', defaultValue = '시작 시간' }: DropDownPropType) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  // eslint-disable-next-line no-undef
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
  };

  return (
    <DropdownContainer $isShort={variant === 'default'}>
      <Text>{selectedValue}</Text>
      <ArrowDownIcon />
    </DropdownContainer>
  );
};

export default DropDown;

const DropdownContainer = styled.section<{ $isShort: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ $isShort }) => ($isShort ? '13rem' : '12rem')};
  height: 4rem;
  padding: 0.3rem 0 0.3rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
`;

const ArrowDownIcon = styled(ArrowDownIc)`
  cursor: pointer;
`;
