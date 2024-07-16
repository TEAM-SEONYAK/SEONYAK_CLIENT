import { DropdownIc } from '@assets/svgs';
import styled from '@emotion/styled';
import { TIME_LIST } from '@pages/seniorProfile/constants';
import { useEffect, useState } from 'react';

interface DropDownPropType {
  variant?: 'default' | 'secondary';
  isActive?: boolean;
  defaultValue: string;
  setProfile: (selectedValue: string | boolean) => void;
  isStartTime: boolean;
  isWarning: boolean;
}

const DropDown = ({
  variant = 'default',
  isActive = true,
  defaultValue,
  setProfile,
  isStartTime,
  isWarning,
}: DropDownPropType) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const [isSelectDown, setIsSelectDown] = useState(false);

  const handleClickDropdown = () => {
    isActive && setIsSelectDown((prev) => !prev);
  };

  // eslint-disable-next-line no-undef
  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsSelectDown(false);
  };

  const handleClickOutside = () => {
    setIsSelectDown(false);
  };

  useEffect(() => {
    setProfile(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    setSelectedValue(defaultValue);
  }, [isActive]);

  return (
    <>
      {isSelectDown && <BackdropContainer onClick={handleClickOutside} />}
      <div>
        <DropdownContainer
          $isDefault={variant === 'default'}
          onClick={handleClickDropdown}
          $isActive={isActive}
          $isWarning={isWarning}>
          <SelectedText $isActive={isActive}>{selectedValue}</SelectedText>
          <ArrowDownIcon isactive={isActive.toString()} />
        </DropdownContainer>
        {isSelectDown && (
          <SelectContainer $isStartTime={isStartTime}>
            {TIME_LIST.map((option) => (
              <SelectOption key={option} onClick={() => handleSelect(option)}>
                {option}
              </SelectOption>
            ))}
          </SelectContainer>
        )}
      </div>
    </>
  );
};

export default DropDown;

const BackdropContainer = styled.div`
  position: fixed;
  z-index: 2;

  width: 100%;
  height: 100dvh;
  margin: -4rem 0 0 -2rem;
`;

const DropdownContainer = styled.section<{ $isDefault: boolean; $isActive: boolean; $isWarning: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ $isDefault }) => ($isDefault ? '13rem' : '12rem')};
  height: 4rem;
  padding: 0.3rem 0 0.3rem ${({ $isDefault }) => ($isDefault ? '1.4rem' : '1.2rem')};
  border: 1px solid ${({ theme, $isWarning }) => ($isWarning ? theme.colors.Red : theme.colors.grayScaleLG1)};
  border-radius: 4px;

  background-color: ${({ theme, $isWarning }) =>
    $isWarning ? theme.colors.transparentRed_3 : theme.colors.grayScaleWhite};

  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'default')};
`;

const SelectedText = styled.p<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Title2_M_16};
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.grayScaleBlack : theme.colors.grayScaleMG1)};
`;

const ArrowDownIcon = styled(DropdownIc)<{ isactive: string }>`
  fill: ${({ isactive }) => (isactive === 'true' ? '#A2A7B0' : '#E7EAF2')};
`;

const SelectContainer = styled.ul<{ $isStartTime: boolean }>`
  overflow-y: scroll;
  position: fixed;
  top: 10rem;
  right: ${({ $isStartTime }) => !$isStartTime && '2.5rem'};
  left: ${({ $isStartTime }) => $isStartTime && '2.5rem'};
  z-index: 2;

  width: 20rem;
  height: 50rem;
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
