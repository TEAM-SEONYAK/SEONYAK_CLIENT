import { ReloadIc } from '@assets/svgs';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { formatCalDateToString } from '../utils/formatCalDateToString';
import { getTomorrow } from '../utils/getTomorrow';

interface CalendarBottomBarPropType {
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  setSelectedTime: React.Dispatch<React.SetStateAction<{ id: number; selectedTime: string; clickedDay: string }[]>>;
  btnId: number;
  handleCheckAllSelected: () => void;
  onCalendarChange: (date: Date) => void;
}

// 만약 selectedTime의 selectedTime과 clickedDay가 문자열인지 확인
// 조건에 따라 버튼의 스타일을 변경
const CalendarBottomBar = ({
  setIsCalendarOpen,
  selectedTime,
  setSelectedTime,
  btnId,
  handleCheckAllSelected,
  onCalendarChange,
}: CalendarBottomBarPropType) => {
  const selectedTimeMent = ['첫 번째 일정 선택하기', '두 번째 일정 선택하기', '세 번째 일정 선택하기'];
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    selectedTime[btnId].selectedTime !== selectedTimeMent[btnId] && selectedTime[btnId].clickedDay !== ''
      ? setIsSelected(true)
      : setIsSelected(false);
  }, [btnId, selectedTime[btnId].selectedTime, selectedTime[btnId].clickedDay]);

  const handleOpenSelect = () => {
    setIsCalendarOpen(false);
    setIsSelected(false);
    handleCheckAllSelected();
  };

  const handleReload = () => {
    const tomorrow = formatCalDateToString(getTomorrow());

    // 버튼 id 랑 index 비교해서 선택적 초기화하기
    setSelectedTime((prevTimes) =>
      prevTimes.map((time, index) => ({
        ...time,
        selectedTime: selectedTimeMent[index],
        clickedDay: tomorrow,
      })),
    );
  };

  return (
    <ButtonLayout>
      <ReloadBtn type="button" onClick={handleReload}>
        <ReloadIcon />
      </ReloadBtn>
      <ExitBottomSheet type="button" disabled={!isSelected} onClick={handleOpenSelect} $isEnabled={isSelected}>
        적용하기
      </ExitBottomSheet>
    </ButtonLayout>
  );
};

export default CalendarBottomBar;

const ReloadIcon = styled(ReloadIc)`
  width: 2rem;
  height: 2rem;
`;

const ButtonLayout = styled.footer`
  display: flex;
  gap: 1.1rem;
  justify-content: center;
  position: fixed;
  bottom: 5rem;
  left: 0;

  width: 100%;
  height: 9.4rem;
  padding: 1.5rem 0 3rem;

  background: ${({ theme }) => theme.colors.grayScaleWhite};
  box-shadow: 0 -8px 30px rgb(0 0 0 / 10%);
`;

const ReloadBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const ExitBottomSheet = styled.button<{ $isEnabled: boolean }>`
  width: 27.4rem;
  height: 5rem;
  border-radius: 8px;

  background: ${({ theme, $isEnabled }) => ($isEnabled ? theme.colors.Blue : theme.colors.grayScaleMG1)};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Head2_SB_18};
  cursor: ${({ $isEnabled }) => ($isEnabled ? 'pointer' : 'not-allowed')};
  transition: background-color 0.3s ease;
`;
