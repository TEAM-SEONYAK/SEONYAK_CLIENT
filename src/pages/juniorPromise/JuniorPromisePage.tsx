import { ArrowLeftIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import Nav from '@components/commons/Nav';
import { SeniorCard } from '@components/commons/SeniorCard';
import styled from '@emotion/styled';
import { BottomSheet } from '@pages/juniorPromise/components/BottomSheet';
import { useState } from 'react';
import { SeniorSearch } from './components/SeniorSearch';

import seniorProfileQueries from '../../hooks/seniorProfileQueries';
import PreView from '@pages/seniorProfile/components/preView';
import { FullBtn } from '@components/commons/FullButton';
import PromiseRequestPage from './components/promiseRequest/PromiseRequestPage';
import Loading from '@components/commons/Loading';
import ErrorPage from '@pages/errorPage/ErrorPage';

import { Banner } from './components/seniorFilter/Banner';

const JuniorPromisePage = () => {
  // 바텀 시트 내 버튼& 내용 필터 버튼
  const [filterActiveBtn, setFilterActiveBtn] = useState('계열');
  // 바텀 시트 여는 동작
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // 필터 버튼에 정보 넣기, 바텀시트 열기
  const handleFilterActiveBtn = (btnText: string) => {
    setFilterActiveBtn(btnText);
    setIsBottomSheetOpen(true);
  };
  // 초기화 함수
  const handleReset = () => {
    setChipFieldName([]);
    setChipPositionName([]);
  };

  // 칩으로 나갈 선택된 계열 이름 리스트
  const [chipFieldName, setChipFieldName] = useState<string[]>([]);

  // 칩으로 나갈 선택된 직무 리스트
  const [chipPositionName, setChipPositionName] = useState<string[]>([]);

  // 선택 계열 리스트 배열로
  const isFieldSelected = (fieldName: string) => chipFieldName.includes(fieldName);

  const handleChipField = (fieldName: string) => {
    if (isFieldSelected(fieldName)) {
      setChipFieldName((prev) => prev.filter((name) => name !== fieldName));
    } else {
      setChipFieldName((prev) => [...prev, fieldName]);
    }
  };

  // 선택 직무 리스트
  const isPositionSelected = (positionName: string) => chipPositionName.includes(positionName);

  const handleChipPosition = (positionName: string) => {
    if (isPositionSelected(positionName)) {
      setChipPositionName((prev) => prev.filter((name) => name !== positionName));
    } else {
      setChipPositionName((prev) => [...prev, positionName]);
    }
  };

  const SeniorSearchCommonProps = {
    handleFilterActiveBtn,
    handleReset,
    chipPositionName,
    chipFieldName,
    handleChipField,
    handleChipPosition,
  };

  // S- 계열리스트에 이름빼는 함수
  const deleteFieldList = (chipName: string) => {
    setChipFieldName((prev) => prev.filter((name) => name !== chipName));
  };

  // S- 직무리스트에 이름 빼는 함수
  const deletePositionList = (chipName: string) => {
    setChipPositionName((prev) => prev.filter((name) => name !== chipName));
  };

  // B- 계열리스트에 이름넣는 함수
  const pushFieldList = (chipName: string) => {
    setChipFieldName((prev) => {
      if (prev.indexOf(chipName) === -1) {
        return [...prev, chipName];
      } else {
        return prev.filter((name) => name !== chipName);
      }
    });
  };

  // B- 직무리스트에 이름 넣는 함수
  const pushPositionList = (chipName: string) => {
    setChipPositionName((prev) => {
      if (prev.indexOf(chipName) === -1) {
        return [...prev, chipName];
      } else {
        return prev.filter((name) => name !== chipName);
      }
    });
  };

  // B- 바텀시트 닫기
  const handleCloseBottomSheet = () => {
    setIsBottomSheetOpen(false);
  };

  // 쿼리 사용하여 데이터 가져오기
  const { data, isLoading, isError } = seniorProfileQueries(chipFieldName, chipPositionName);
  const seniorList = data?.data.seniorList || [];
  const myNickname = data?.data.myNickname;
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <ErrorPage />;
  }

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
        <PreventScroll $isBottomSheetOpen={isBottomSheetOpen}>
          <Banner myNickname={myNickname} />
          <ContentWrapper>
            <SeniorSearch
              {...SeniorSearchCommonProps}
              deleteFieldList={deleteFieldList}
              deletePositionList={deletePositionList}
              $chipFieldName={chipFieldName}
              $chipPositionName={chipPositionName}>
              <BottomSheet
                {...SeniorSearchCommonProps}
                filterActiveBtn={filterActiveBtn}
                handleCloseBottomSheet={handleCloseBottomSheet}
                isBottomSheetOpen={isBottomSheetOpen}
                pushFieldList={pushFieldList}
                pushPositionList={pushPositionList}
              />
            </SeniorSearch>
            <SeniorCardListLayout>
              {seniorList?.map((list) => (
                <SeniorCard
                  key={list.seniorId}
                  {...list}
                  variant="secondary"
                  handleSeniorCardClicked={handleSeniorCardClicked}
                />
              ))}
            </SeniorCardListLayout>
          </ContentWrapper>
          <Nav />
        </PreventScroll>
      )}
    </>
  );
};

export default JuniorPromisePage;

const PreventScroll = styled.div<{ $isBottomSheetOpen: boolean }>`
  position: ${({ $isBottomSheetOpen }) => ($isBottomSheetOpen ? 'fixed' : 'relative')};

  width: 100%;
  height: 100vh;

  background: ${({ theme }) => theme.colors.grayScaleWG};
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 17.7rem;

  width: 100%;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWG};
`;

const SeniorCardListLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  width: 100vw;
  height: 100%;
  margin-bottom: 10rem;
  padding: 0.8rem 2rem;
`;
