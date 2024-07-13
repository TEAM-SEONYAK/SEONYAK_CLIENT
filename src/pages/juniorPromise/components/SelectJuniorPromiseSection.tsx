import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { useState } from 'react';
import BottomBar from './BottomBar';
import CalendarBottomSheet from './CalendarBottomSheet';
import GrayLine from './GrayLine';
import SelectJuniorWorryButton from '../components/SelectJuniorWorryButton';
import SelectJuniorWorryTextBoxWrapper from '../components/SelectJuniorWorryTextareaWrapper';
import SelectJuniorWorryTitleWrapper from '../components/SelectJuniorWorryTitleWrapper';
import TimeSelectionButton from '../components/TimeSelectionButton';
import TimeSelectionTitleWrapper from '../components/TimeSelectionTitleWrapper';

const SelectJuniorPromiseSection = () => {
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('left');

  // 캘린더 여닫기
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // 각 버튼마다 선택된 시간 저장
  const [selectedTime, setSelectedTime] = useState([
    { id: 0, selectedTime: '첫 번째 일정 선택하기', clickedDay: '' },
    { id: 1, selectedTime: '두 번째 일정 선택하기', clickedDay: '' },
    { id: 2, selectedTime: '세 번째 일정 선택하기', clickedDay: '' },
  ]);
  // 몇 번째 버튼이 눌렸니~
  const [btnId, setBtnId] = useState(0);

  // onToggle 함수 정의
  const handleToggle = (button: 'left' | 'right') => {
    setActiveButton(button);
  };

  console.log(selectedTime);

  return (
    <TimeSelectionContainer>
      <TimeSelectionTitleWrapper />
      <TimeSelectionButton
        selectedTime={selectedTime}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        setSelectedTime={setSelectedTime}
        setBtnId={setBtnId}
      />
      <GrayLine />
      <SelectJuniorWorryTitleWrapper />
      <ToggleButton left="선택할게요" right="작성할게요" activeButton={activeButton} onToggle={handleToggle} />
      {activeButton === 'left' ? <SelectJuniorWorryButton /> : <SelectJuniorWorryTextBoxWrapper />}
      <CalendarBottomSheet
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        btnId={btnId}
      />
    </TimeSelectionContainer>
  );
};

export default SelectJuniorPromiseSection;

const TimeSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 0 2rem;
`;
