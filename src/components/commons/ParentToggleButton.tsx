import React, { useState } from 'react';
import SelectJuniorWorryButton from './SelectJuniorWorryButton';
import TimeSelectionButton from './TimeSelectionButton';
import ToggleButton from '../../../components/commons/toggleButton';

const ParentComponent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('left');

  return (
    <div>
      <h1>Toggle Button Example</h1>
      <ToggleButton
        left="선택할게요"
        right="작성할게요"
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />
      {activeButton === 'left' ? <TimeSelectionButton /> : <SelectJuniorWorryButton />}
    </div>
  );
};

export default ParentComponent;
