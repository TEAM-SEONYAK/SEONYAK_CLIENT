import styled from '@emotion/styled';
import { useState } from 'react';
import TimeAlldays from './TimeAlldays';
import TimeWeekdays from './TimeWeekdays';
import ToggleButton from '../../../components/commons/ToggleButton';

const TimeSelect = () => {
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('left');

  const handleActiveButton = () => {
    setActiveButton((prev) => (prev === 'left' ? 'right' : 'left'));
  };

  return (
    <Wrapper>
      <ToggleButton
        left="주중/주말 선택"
        right="모든 요일 선택"
        activeButton={activeButton}
        onToggle={handleActiveButton}
      />
      {activeButton === 'left' ? <TimeWeekdays /> : <TimeAlldays />}
    </Wrapper>
  );
};

export default TimeSelect;

const Wrapper = styled.div`
  padding-top: 3.2rem;
`;
