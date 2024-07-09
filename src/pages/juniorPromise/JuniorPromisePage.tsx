import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { useState } from 'react';
import SelectJuniorWorryButton from './components/SelectJuniorWorryButton';
import SelectJuniorWorryTextBoxWrapper from './components/SelectJuniorWorryTextareaWrapper';
import SelectJuniorWorryTitleWrapper from './components/SelectJuniorWorryTitleWrapper';
import TimeSelectionButton from './components/TimeSelectionButton';
import TimeSelectionTitleWrapper from './components/TimeSelectionTitleWrapper';

const JuniorPromisePage = () => {
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('left');

  // onToggle 함수 정의
  const handleToggle = (button: 'left' | 'right') => {
    setActiveButton(button);
  };

  return (
    <TimeSelectionContainer>
      <TimeSelectionTitleWrapper />
      <TimeSelectionButton />
      <SelectJuniorWorryTitleWrapper />
      <ToggleButton left="선택할게요" right="작성할게요" activeButton={activeButton} onToggle={handleToggle} />
      {activeButton === 'left' ? <SelectJuniorWorryButton /> : <SelectJuniorWorryTextBoxWrapper />}
    </TimeSelectionContainer>
  );
};

export default JuniorPromisePage;

const TimeSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 0 2rem;
`;
