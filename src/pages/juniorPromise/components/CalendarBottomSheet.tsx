import styled from '@emotion/styled';
import React from 'react';
import BottomBar from './BottomBar';
import CustomCalendar from './CustomCalendar';
import GrayLine from './GrayLine';
import TimeList from './TimeList';

interface BottomSheetPropType {
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  setSelectedTime: React.Dispatch<React.SetStateAction<{ id: number; selectedTime: string; clickedDay: string }[]>>;
  isCalendarOpen: boolean;
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  btnId: number;
}

const CalendarBottomSheet: React.FC<BottomSheetPropType> = ({
  isCalendarOpen,
  setIsCalendarOpen,
  selectedTime,
  setSelectedTime,
  btnId,
}) => {
  return (
    <>
      <Background
        $isCalendarOpen={isCalendarOpen}
        onClick={() => {
          setIsCalendarOpen(false);
        }}
      />
      <BottomSheetWrapper $isCalendarOpen={isCalendarOpen}>
        <CustomCalendar btnId={btnId} setSelectedTime={setSelectedTime} />
        <GrayLine />
        <TimeList selectedTime={selectedTime} setSelectedTime={setSelectedTime} btnId={btnId} />
        <BottomBar setIsCalendarOpen={setIsCalendarOpen} />
      </BottomSheetWrapper>
    </>
  );
};

export default CalendarBottomSheet;

const Background = styled.div<{ $isCalendarOpen: boolean }>`
  display: ${({ $isCalendarOpen }) => ($isCalendarOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100dvh;

  background: ${({ theme }) => theme.colors.transparentBlack_65};
`;

const BottomSheetWrapper = styled.div<{ $isCalendarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;

  height: 100vh;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWhite};

  opacity: ${({ $isCalendarOpen }) => ($isCalendarOpen ? 1 : 0)};
  transition:
    transform 250ms ease-out,
    opacity 250ms ease-out;
  transform: translateY(${({ $isCalendarOpen }) => ($isCalendarOpen ? '0' : '100%')});
`;
