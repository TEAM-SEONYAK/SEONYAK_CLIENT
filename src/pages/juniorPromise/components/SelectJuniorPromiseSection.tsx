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
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // onToggle 함수 정의
  const handleToggle = (button: 'left' | 'right') => {
    setActiveButton(button);
  };

  const handleSheetOpen = () => {
    setIsSheetOpen(true);
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false);
  };

  return (
    <TimeSelectionContainer>
      <TimeSelectionTitleWrapper />
      <TimeSelectionButton onSelect={handleSheetOpen} />
      <GrayLine />
      <SelectJuniorWorryTitleWrapper />
      <ToggleButton left="선택할게요" right="작성할게요" activeButton={activeButton} onToggle={handleToggle} />
      {activeButton === 'left' ? <SelectJuniorWorryButton /> : <SelectJuniorWorryTextBoxWrapper />}
      <BottomBar handleSheetClose={handleSheetClose} />
      <CalendarBottomSheet isSheetOpen={isSheetOpen} handleSheetClose={handleSheetClose} />
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
