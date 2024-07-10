// import styled from '@emotion/styled';
// import TimeSelectionButton from './components/TimeSelectionButton';
// import TimeSelectionTitleWrapper from './components/TimeSelectionTitleWrapper';
import { useState } from 'react';
import { BottomSheetBg } from './components/BottomSheetBg';

const JuniorPromisePage = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const handleSheetOpen = () => {
    setIsSheetOpen(true);
  };
  const handleSheetClose = () => {
    setIsSheetOpen(false);
  };

  return (
    <>
      <BottomSheetBg isSheetOpen={isSheetOpen} handleSheetOpen={handleSheetOpen} handleSheetClose={handleSheetClose} />
    </>
    // <TimeSelectionContainer>
    //   <TimeSelectionTitleWrapper />
    //   <TimeSelectionButton />
    // </TimeSelectionContainer>
  );
};

export default JuniorPromisePage;

// const TimeSelectionContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;

//   width: 100%;
//   padding: 0 2rem;
// `;
