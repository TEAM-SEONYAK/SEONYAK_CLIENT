import styled from '@emotion/styled';
import React from 'react';
import { ButtonCheckIc } from '../../../assets/svgs';
import { TIME_SELECTION_BUTTON } from '../constants/constants';
import { formatBtnDateToString } from '../utils/formatBtnDateToString';

interface TimeSelectionButtonProps {
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  isCalendarOpen: boolean;
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTime: React.Dispatch<React.SetStateAction<{ id: number; selectedTime: string; clickedDay: string }[]>>;
  setBtnId: React.Dispatch<React.SetStateAction<number>>;
  handleCheckAllSelected: () => void;
}

const TimeSelectionButton: React.FC<TimeSelectionButtonProps> = ({
  selectedTime,
  setIsCalendarOpen,
  setBtnId,
  handleCheckAllSelected,
}: TimeSelectionButtonProps) => {
  const handleTimeSelectBtn = (btnId: number) => {
    setIsCalendarOpen(true);
    setBtnId(btnId);
  };

  return (
    <Wrapper>
      {selectedTime.map((item, idx) => (
        <TimeBtn
          key={item.id}
          $isActive={item.selectedTime !== TIME_SELECTION_BUTTON[idx]}
          onClick={() => {
            handleTimeSelectBtn(item.id);
            handleCheckAllSelected();
          }}>
          {item.selectedTime !== TIME_SELECTION_BUTTON[idx] && formatBtnDateToString(item.clickedDay)}{' '}
          {item.selectedTime}
          <ButtonCheckIcon isactive={(item.selectedTime !== TIME_SELECTION_BUTTON[idx]).toString()} />
        </TimeBtn>
      ))}
    </Wrapper>
  );
};

export default TimeSelectionButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const TimeBtn = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.2rem 1.359rem 1.1rem 2rem;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2)};
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleWG};

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grayScaleBlack : theme.colors.grayScaleDG)};

  ${({ theme }) => theme.fonts.Title2_M_16}
`;

const ButtonCheckIcon = styled(ButtonCheckIc)<{ isactive: string }>`
  display: ${({ isactive }) => (isactive === 'true' ? 'block' : 'none')};
`;
