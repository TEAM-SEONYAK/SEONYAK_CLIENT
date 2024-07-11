import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import { useState } from 'react';
import { BottomSheet } from './components/BottomSheetBg';
import { SeniorListBackground } from './components/SeniorListBackground';
import { SENIOR_LIST } from '../../components/commons/seniorCard/seniorCardConstants';

const JuniorPromisePage = () => {
  const { seniorList } = SENIOR_LIST;
  const [isSheetOpen, setSheetOpen] = useState(false);
  const handleSheetOpen = () => {
    setSheetOpen(true);
  };

  const handleSheetClose = () => {
    setSheetOpen(false);
  };

  return (
    <>
      <SeniorListBackground handleSheetOpen={handleSheetOpen}>
        <SeniorListWrapper>
          {seniorList.map((list) => (
            <SeniorCard
              key={list.seniorId}
              nickname={list.nickname}
              company={list.company}
              field={list.field}
              position={list.position}
              detailPosition={list.detailPosition}
              level={list.level}
            />
          ))}
        </SeniorListWrapper>
      </SeniorListBackground>
      <BottomSheet isSheetOpen={isSheetOpen} handleSheetOpen={handleSheetOpen} handleSheetClose={handleSheetClose} />
    </>
  );
};

export default JuniorPromisePage;

const SeniorListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  width: 100vw;
  height: 100vh;
  padding: 0.8rem 2rem;
`;
