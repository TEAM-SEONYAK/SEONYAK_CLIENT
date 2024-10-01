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
import Loading from '@components/commons/Loading';
import ErrorPage from '@pages/errorPage/ErrorPage';

import { Banner } from './components/seniorFilter/Banner';
import { useNavigate } from 'react-router-dom';
import useSeniorProfileQueries from '../../hooks/seniorProfileQueries';

const JuniorPromisePage = () => {
  const navigate = useNavigate();

  // 바텀 시트 내 버튼& 내용 필터 버튼
  const [filterActiveBtn, setFilterActiveBtn] = useState('계열');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [chipFieldName, setChipFieldName] = useState<string[]>([]);
  const [chipPositionName, setChipPositionName] = useState<string[]>([]);
  const [isSeniorCardClicked, setIsSeniorCardClicked] = useState(false);
  const [seniorId, setSeniorId] = useState(0);
  const [seniorNickname, setSeniorNickname] = useState('');

  const { data, isLoading, isError } = useSeniorProfileQueries(chipFieldName, chipPositionName);

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

  const handleSeniorCardClicked = (type: boolean, id: number, name: string) => {
    setIsSeniorCardClicked(type);
    setSeniorId(id);
    setSeniorNickname(name);
  };

  const handlePromiseClicked = () => {
    navigate('/juniorPromiseRequest', {
      state: {
        seniorId,
        seniorNickname,
      },
    });
  };

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  const seniorList = data?.data.seniorList || [];
  const myNickname = data?.data.myNickname;

  const seniorSearchCommonProps = {
    handleFilterActiveBtn,
    handleReset,
    chipPositionName,
    chipFieldName,
    handleChipField: (fieldName: string) => {
      setChipFieldName((prev) =>
        prev.includes(fieldName) ? prev.filter((name) => name !== fieldName) : [...prev, fieldName]
      );
    },
    handleChipPosition: (positionName: string) => {
      setChipPositionName((prev) =>
        prev.includes(positionName) ? prev.filter((name) => name !== positionName) : [...prev, positionName]
      );
    },
  };

  return (
    <>
      {isSeniorCardClicked ? (
        <>
          <Header LeftSvg={ArrowLeftIc} onClickLeft={() => setIsSeniorCardClicked(false)} />
          <PreView variant="secondary" seniorId={String(seniorId)} />
          <FullBtn text="약속 신청하기" onClick={handlePromiseClicked} />
        </>
      ) : (
        <PreventScroll $isBottomSheetOpen={isBottomSheetOpen}>
          <Banner myNickname={myNickname} />
          <ContentWrapper>
            <SeniorSearch
              {...seniorSearchCommonProps}
              deleteFieldList={(chipName: string) =>
                setChipFieldName((prev) => prev.filter((name) => name !== chipName))
              }
              deletePositionList={(chipName: string) =>
                setChipPositionName((prev) => prev.filter((name) => name !== chipName))
              }
              $chipFieldName={chipFieldName}
              $chipPositionName={chipPositionName}>
              <BottomSheet
                {...seniorSearchCommonProps}
                filterActiveBtn={filterActiveBtn}
                handleCloseBottomSheet={() => setIsBottomSheetOpen(false)}
                isBottomSheetOpen={isBottomSheetOpen}
                pushFieldList={(chipName: string) => {
                  setChipFieldName((prev) => {
                    if (prev.includes(chipName)) {
                      return prev.filter((name) => name !== chipName);
                    }
                    return [...prev, chipName];
                  });
                }}
                pushPositionList={(chipName: string) => {
                  setChipPositionName((prev) => {
                    if (prev.includes(chipName)) {
                      return prev.filter((name) => name !== chipName);
                    }
                    return [...prev, chipName];
                  });
                }}
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
