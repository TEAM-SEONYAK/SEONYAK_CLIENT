import { HeaderLogoIc, AlarmIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import img_modal_accept from '@assets/images/img_modal_accept.png';
import { ArrowLeftIc } from '@assets/svgs';

import Nav from '@components/commons/Nav';
import { SeniorCard } from '@components/commons/SeniorCard';
import styled from '@emotion/styled';
import { BottomSheet } from '@pages/juniorPromise/components/BottomSheet';
import { useState } from 'react';
import { SeniorSearch } from './components/SeniorSearch';

import PreView from '@pages/seniorProfile/components/preView';
import { FullBtn } from '@components/commons/FullButton';
import Loading from '@components/commons/Loading';
import ErrorPage from '@pages/errorPage/ErrorPage';

import { Banner } from './components/seniorFilter/Banner';
import { useNavigate } from 'react-router-dom';
import useSeniorProfileQueries from '@hooks/seniorProfileQueries';

const JuniorPromisePage = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // 바텀 시트 내 버튼& 내용 필터 버튼
  const [filterActiveBtn, setFilterActiveBtn] = useState<string | null>(null);

  // 칩으로 나갈 선택된 계열 이름 리스트
  const [chipFieldName, setChipFieldName] = useState<string[]>([]);
  // 칩으로 나갈 선택된 직무 리스트
  const [chipPositionName, setChipPositionName] = useState<string[]>([]);
  const [isSeniorCardClicked, setIsSeniorCardClicked] = useState(false);
  const [seniorId, setSeniorId] = useState(0);
  const [seniorNickname, setSeniorNickname] = useState('');

  // 쿼리 사용하여 데이터 가져오기
  const { data, isLoading, isError } = useSeniorProfileQueries(chipFieldName, chipPositionName);

  // 필터 버튼에 정보 넣기, 바텀시트 열기
  const handleFilterActiveBtn = (btnText: string) => {
    setFilterActiveBtn(btnText);
  };
  // 초기화 함수
  const handleReset = () => {
    setChipFieldName([]);
    setChipPositionName([]);
  };

  // 선택 계열 리스트
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

  // S- 계열리스트에 이름빼는 함수
  const deleteFieldList = (chipName: string) => {
    setChipFieldName((prev) => prev.filter((name) => name !== chipName));
  };

  // S- 직무리스트에 이름 빼는 함수
  const deletePositionList = (chipName: string) => {
    setChipPositionName((prev) => prev.filter((name) => name !== chipName));
  };

  // B- 바텀시트 닫기
  const handleCloseBottomSheet = () => {
    setFilterActiveBtn(null);
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

  const SeniorSearchCommonProps = {
    handleFilterActiveBtn,
    handleReset,
    chipPositionName,
    chipFieldName,
    handleChipField,
    handleChipPosition,
  };

  return (
    <>
      {isSeniorCardClicked ? (
        <>
          <Header
            LeftSvg={ArrowLeftIc}
            title="선배 프로필"
            onClickLeft={() => {
              setIsSeniorCardClicked(false);
            }}
          />
          <Divider />
          <PreView variant="secondary" seniorId={seniorId + ''} />
          <FullBtn text="약속 신청하기" onClick={handlePromiseClicked} />
        </>
      ) : (
        <PreventScroll $filterActiveBtn={filterActiveBtn}>
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
      {/* 모달 컴포넌트 추가 */}
      <AutoCloseModal
        text="알림은 문자를 확인해주세요 !"
        showModal={showModal}
        handleShowModal={(show: boolean) => setShowModal(show)}>
        <ModalImg src={img_modal_accept} />
      </AutoCloseModal>
    </>
  );
};

export default JuniorPromisePage;

const PreventScroll = styled.div<{ $filterActiveBtn: string | null }>`
  position: ${({ $filterActiveBtn }) => ($filterActiveBtn !== null ? 'fixed' : 'relative')};

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
const ModalImg = styled.img`
  width: 27rem;
  height: 17.2rem;
`;

const Divider = styled.div`
  position: fixed;
  top: 5rem;

  width: 100vw;
  border: 1.4px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;
