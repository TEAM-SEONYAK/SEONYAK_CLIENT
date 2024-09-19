import { ArrowLeftIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import Nav from '@components/commons/Nav';
import { SeniorCard } from '@components/commons/SeniorCard';
import styled from '@emotion/styled';
import { BottomSheet } from '@pages/juniorPromise/components/BottomSheetBg';
import { useState } from 'react';
import { SeniorListBackground } from './components/SeniorListBackground';
import seniorProfileQueries from '../../hooks/seniorProfileQueries';
import PreView from '@pages/seniorProfile/components/preView';
import { FullBtn } from '@components/commons/FullButton';
import PromiseRequestPage from './components/promiseRequest/PromiseRequestPage';
import Loading from '@components/commons/Loading';

import { Banner } from './components/seniorFilter/Banner';

const JuniorPromisePage = () => {
  // 선배리스트, 바텀시트 모두에서 필요한 프롭스 리스트
  // 1. 바텀 시트 내 버튼& 내용 필터 버튼
  const [filterActiveBtn, setFilterActiveBtn] = useState('계열');
  // 1. 바텀 시트 여는 동작
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 1. 필터 버튼에 정보 넣기, 바텀시트 열기
  const handleFilterActiveBtn = (btnText: string) => {
    setFilterActiveBtn(btnText);
    setIsBottomSheetOpen(true);
  };
  // 2. 초기화 함수
  const handleReset = () => {
    setSelectedPosition(Array(21).fill(false));
    setSelectedField(Array(7).fill(false));
    setChipFieldName([]);
    setChipPositionName([]);
  };

  // 3. 칩으로 나갈 선택된 계열 이름 리스트
  const [chipFieldName, setChipFieldName] = useState<string[]>([]);

  // 4. 칩으로 나갈 선택된 직무 리스트
  const [chipPositionName, setChipPositionName] = useState<string[]>([]);

  // 5. 바텀시트 내 계열 칩
  const [selectedField, setSelectedField] = useState(Array(7).fill(false));

  // 5. 선택 계열 리스트 T/F
  const arrField = [...selectedField];

  const handleChipField = (fieldId: number) => {
    arrField[fieldId] = !arrField[fieldId];

    setSelectedField(arrField);
  };
  // 6. 바텀시트 내 직무 칩
  const [selectedPosition, setSelectedPosition] = useState(Array(21).fill(false));

  // 6. 선택 직무 리스트 T/F
  const arrPosition = [...selectedPosition];

  const handleChipPosition = (positionId: number) => {
    arrPosition[positionId] = !arrPosition[positionId];

    setSelectedPosition(arrPosition);
  };
  // ------------------------------------------------
  // S- 계열리스트에 이름빼는 함수
  const deleteFieldList = (chipName: string) => {
    setChipFieldName((prev) => prev.filter((name) => name !== chipName));
  };

  // S- 직무리스트에 이름 빼는 함수
  const deletePositionList = (chipName: string) => {
    setChipPositionName((prev) => prev.filter((name) => name !== chipName));
  };

  // -----------------------------------------------

  // B-계열리스트에 이름넣는 함수
  const pushFieldList = (chipName: string) => {
    setChipFieldName((prev) => {
      if (prev.indexOf(chipName) === -1) {
        return [...prev, chipName];
      } else {
        return prev.filter((name) => name !== chipName);
      }
    });
  };

  // B-직무리스트에 이름 넣는 함수
  const pushPositionList = (chipName: string) => {
    setChipPositionName((prev) => {
      if (prev.indexOf(chipName) === -1) {
        return [...prev, chipName];
      } else {
        return prev.filter((name) => name !== chipName);
      }
    });
  };

  // B-바텀시트 닫기
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  // 쿼리 사용하여 데이터 가져오기
  const { data, isLoading, isError } = seniorProfileQueries(chipFieldName, chipPositionName);

  const seniorList = data?.data.seniorList || [];
  // 내 닉네임 가져오기
  const myNickname = data?.data.myNickname;

  const [isSeniorCardClicked, setIsSeniorCardClicked] = useState(false);
  const [isPromiseClicked, setIsPromisedClicked] = useState(false);
  const [seniorId, setSeniorId] = useState(0);
  const [seniorNickname, setSeniorNickname] = useState('');
  const handleSeniorCardClicked = (type: boolean, id: number, name: string) => {
    setIsSeniorCardClicked(type);
    setSeniorId(id);
    setSeniorNickname(name);
  };

  const handlePromiseClicked = () => {
    setIsPromisedClicked(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }

  return (
    <>
      {isPromiseClicked ? (
        <PromiseRequestPage seniorId={seniorId} seniorNickname={seniorNickname} />
      ) : isSeniorCardClicked ? (
        <>
          <Header
            LeftSvg={ArrowLeftIc}
            onClickLeft={() => {
              setIsSeniorCardClicked(false);
            }}
          />
          <PreView variant="secondary" seniorId={seniorId + ''} />
          <FullBtn text="약속 신청하기" onClick={handlePromiseClicked} />
        </>
      ) : (
        <PreventScroll isBottomSheetOpen={isBottomSheetOpen}>
          <Banner myNickname={myNickname} />
          <SeniorListBackground
            handleFilterActiveBtn={handleFilterActiveBtn}
            handleReset={handleReset}
            chipPositionName={chipPositionName}
            chipFieldName={chipFieldName}
            deleteFieldList={deleteFieldList}
            handleChipField={handleChipField}
            deletePositionList={deletePositionList}
            handleChipPosition={handleChipPosition}
            $chipFieldName={chipFieldName}
            $chipPositionName={chipPositionName}>
            <SeniorListWrapper>
              {seniorList?.map((list) => (
                <SeniorCard
                  key={list.seniorId}
                  {...list}
                  variant="secondary"
                  handleSeniorCardClicked={handleSeniorCardClicked}
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
            handleChipField={handleChipField}
            handleChipPosition={handleChipPosition}
            selectedPosition={selectedPosition}
            selectedField={selectedField}
            handleReset={handleReset}
            chipFieldName={chipFieldName}
            pushFieldList={pushFieldList}
            chipPositionName={chipPositionName}
            pushPositionList={pushPositionList}
          />
        </PreventScroll>
      )}
    </>
  );
};

export default JuniorPromisePage;

const PreventScroll = styled.div<{ isBottomSheetOpen: boolean }>`
  position: ${({ isBottomSheetOpen }) => (isBottomSheetOpen ? 'fixed' : 'relative')};
`;

const SeniorListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  width: 100vw;
  height: 100%;
  margin-bottom: 9.8rem;
  padding: 0.8rem 2rem;
`;
