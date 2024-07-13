import { TempLogoIc, AlarmIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import Nav from '@components/commons/Nav';
import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import { SENIOR_LIST } from '@components/commons/seniorCard/seniorCardConstants';
import styled from '@emotion/styled';
import { useState } from 'react';
import { BottomSheet } from './components/BottomSheetBg';
import { SeniorListBackground } from './components/SeniorListBackground';

const JuniorPromisePage = () => {
  const { seniorList } = SENIOR_LIST;
  // 필터 버튼
  const [filterActiveBtn, setFilterActiveBtn] = useState('계열');
  // 바텀 시트 여는 동작
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 필터 버튼에 정보 넣기, 바텀시트 열기
  const handleFilterActiveBtn = (btnText: string) => {
    setFilterActiveBtn(btnText);
    setIsBottomSheetOpen(true);
  };
  // 바텀시트 닫기
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  return (
    <>
      <Header LeftSvg={TempLogoIc} RightSvg={AlarmIc} />
      <SeniorListBackground handleFilterActiveBtn={handleFilterActiveBtn}>
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
        filterActiveBtn={filterActiveBtn}
        handleFilterActiveBtn={handleFilterActiveBtn}
        handleCloseBottomSheet={handleCloseBottomSheet}
        isBottomSheetOpen={isBottomSheetOpen}
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
