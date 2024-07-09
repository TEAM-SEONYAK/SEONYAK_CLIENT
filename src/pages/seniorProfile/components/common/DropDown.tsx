import styled from '@emotion/styled';
import { TIME_LIST } from '@pages/seniorProfile/constants';
import { useEffect, useRef, useState } from 'react';
import ArrowDownIc from '../../../../assets/svgs/ic_arrow_down_mg.svg?react';

interface DropDownPropType {
  variant?: 'default' | 'secondary';
  defaultValue?: '시작 시간' | '마지막 시간';
  isLatter?: boolean;
}

const DropDown = ({ variant = 'default', defaultValue = '시작 시간', isLatter = false }: DropDownPropType) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line no-undef
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsActive(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <DropdownContainer $isDefault={variant === 'default'} onClick={() => setIsActive((prev) => !prev)}>
        <Text>{selectedValue}</Text>
        <ArrowDownIc />
      </DropdownContainer>
      {isActive && (
        <SelectContainer $isDefault={variant === 'default'} $isLatter={isLatter}>
          {TIME_LIST.map((option) => (
            <SelectOption key={option} onClick={() => handleSelect(option)}>
              {option}
            </SelectOption>
          ))}
        </SelectContainer>
      )}
    </div>
  );
};

export default DropDown;

const DropdownContainer = styled.section<{ $isDefault: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ $isDefault }) => ($isDefault ? '13rem' : '12rem')};
  height: 4rem;
  padding: 0.3rem 0 0.3rem ${({ $isDefault }) => ($isDefault ? '1.4rem' : '1.2rem')};
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};

  cursor: pointer;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
`;

const SelectContainer = styled.ul<{ $isDefault: boolean; $isLatter: boolean }>`
  overflow-y: scroll;
  position: fixed;
  z-index: 2;

  width: ${({ $isDefault }) => ($isDefault ? '13rem' : '12rem')};
  height: 16rem;
  margin-top: ${({ $isLatter }) => ($isLatter ? '-20rem' : '0.5rem')};
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  list-style: none;
`;

const SelectOption = styled.li`
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};

  ${({ theme }) => theme.fonts.Caption1_R_12};
  cursor: pointer;
`;
