/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import DeleteIc from '@assets/svgs/ic_delete_btn.svg?react';
import PlusIc from '@assets/svgs/ic_plus_btn.svg?react';
import styled from '@emotion/styled';
import DropDown from '@pages/seniorProfile/components/common/DropDown';
import { preferredTimeType } from '@pages/seniorProfile/types';
import { useState } from 'react';

interface DurationPropType {
  variant?: 'default' | 'secondary';
  isLatter?: boolean;
  selectValue: preferredTimeType;
  setProfile: (timeCategory: 'startTime' | 'endTime') => (selectedValue: string) => void;
}

const DurationSelect = ({ variant = 'default', isLatter = false, selectValue, setProfile }: DurationPropType) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Wrapper>
      <DropDown
        variant={variant}
        isLatter={isLatter}
        isActive={isActive}
        defaultValue={selectValue.startTime}
        setProfile={setProfile('startTime')}
      />
      <WaveText $isDefault={variant === 'default'} $isActive={isActive}>
        ~
      </WaveText>
      <DropDown
        variant={variant}
        isLatter={isLatter}
        isActive={isActive}
        defaultValue={selectValue.endTime}
        setProfile={setProfile('endTime')}
      />
      {isActive ? (
        <DeleteIcon onClick={() => setIsActive((prev) => !prev)} />
      ) : (
        <PlusIcon onClick={() => setIsActive((prev) => !prev)} />
      )}
    </Wrapper>
  );
};

export default DurationSelect;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WaveText = styled.p<{ $isDefault: boolean; $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Title2_M_16};
  padding-right: ${({ $isDefault }) => ($isDefault ? '0.9rem' : '0.7rem')};
  padding-left: ${({ $isDefault }) => ($isDefault ? '0.9rem' : '0.7rem')};

  color: ${({ $isActive, theme }) => !$isActive && theme.colors.grayScaleMG1};
`;

export const DeleteIcon = styled(DeleteIc)`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 2rem;
  padding: 0.8rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  cursor: pointer;
`;

export const PlusIcon = styled(PlusIc)`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 2rem;
  padding: 0.8rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleDG};

  cursor: pointer;
`;
