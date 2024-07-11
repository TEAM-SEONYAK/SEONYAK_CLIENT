import Nav from '@components/commons/Nav';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import { useState } from 'react';
import { BottomSheet } from './components/BottomSheetBg';
import { SeniorListBackground } from './components/SeniorListBackground';
import { FIELD_LIST } from './constants/fieldList';
import { POSITION_LIST } from './constants/positionList';
import { SENIOR_LIST } from '../../components/commons/seniorCard/seniorCardConstants';

const JuniorPromisePage = () => {
  const { seniorList } = SENIOR_LIST;
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [listedField, setListedField] = useState<string[]>([]); // 계열 목록 저장
  const [listedPosition, setListedPosition] = useState<string[]>([]); // 직무 목록 저장

  const handleSheetOpen = () => {
    setListedField(FIELD_LIST.fieldList.map((item) => item.field)); // 모든 필드 렌더링
    setListedPosition(POSITION_LIST.positionList.map((item) => item.position)); //모든 직무 렌더링
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
        <Nav />
      </SeniorListBackground>
      <BottomSheet
        isSheetOpen={isSheetOpen}
        handleSheetClose={handleSheetClose}
        field={listedField} // BottomSheet에 계열 목록 전달
        position={listedPosition} //BottomSheet에 직무 목록 전달
        handleSheetOpen={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
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
