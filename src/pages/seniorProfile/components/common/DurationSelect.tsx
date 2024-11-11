/* eslint-disable no-unused-vars */
import { DeleteIc, PlusIc } from '@assets/svgs';
import WarnDescription from '@components/commons/WarnDescription';

import styled from '@emotion/styled';
import DropDown from '@pages/seniorProfile/components/common/DropDown';
import { TimeCategoryType, preferredTimeType } from '@pages/seniorProfile/types';
import { useState } from 'react';

interface DurationPropType {
  variant?: 'default' | 'secondary';
  selectValue: preferredTimeType;
  setProfile: (timeCategory: TimeCategoryType) => (selectedValue: string | boolean) => void;
  defaultActive: boolean;
  isWarning: boolean;
}

const DurationSelect = ({
  variant = 'default',
  selectValue,
  setProfile,
  defaultActive,
  isWarning,
}: DurationPropType) => {
  const [isActive, setIsActive] = useState(defaultActive);
  const invalidTime =
    selectValue.startTime !== '시작 시간' &&
    selectValue.endTime !== '마지막 시간' &&
    selectValue.startTime > selectValue.endTime;
  const handleDelete = () => {
    setIsActive((prev) => !prev);
    setProfile('startTime')('시작 시간');
    setProfile('endTime')('마지막 시간');
    setProfile('isActive')(false);
  };

  const handlePlus = () => {
    setIsActive((prev) => !prev);
    setProfile('isActive')(true);
  };

  return (
    <>
      <Wrapper>
        <DropDown
          variant={variant}
          isActive={isActive}
          defaultValue={selectValue.startTime}
          setProfile={setProfile('startTime')}
          isStartTime={true}
          isWarning={!!(isWarning && selectValue.isActive && selectValue.startTime === '시작 시간') || invalidTime}
        />
        <WaveText $isDefault={variant === 'default'} $isActive={isActive}>
          ~
        </WaveText>
        <DropDown
          variant={variant}
          isActive={isActive}
          defaultValue={selectValue.endTime}
          setProfile={setProfile('endTime')}
          isStartTime={false}
          isWarning={!!(isWarning && selectValue.isActive && selectValue.endTime === '마지막 시간') || invalidTime}
        />
        {isActive ? <DeleteIcon onClick={handleDelete} /> : <PlusIcon onClick={handlePlus} />}
      </Wrapper>
    </>
  );
};

export default DurationSelect;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const WaveText = styled.p<{ $isDefault: boolean; $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Title2_M_16};
  padding: ${({ $isDefault }) => ($isDefault ? '0 0.9rem' : '0 0.7rem')};

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

const WarnWrapper = styled.div`
  align-self: flex-start;

  padding: 1rem 0 0.6rem;
`;
