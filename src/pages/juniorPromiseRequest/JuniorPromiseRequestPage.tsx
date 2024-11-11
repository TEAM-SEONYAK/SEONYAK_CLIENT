import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePostAppointment } from './hooks/queries';

import CalendarBottomSheet from './components/CalendarBottomSheet';
import WorryButtons from './components/WorryButtons';
import WorryTextarea from './components/WorryTextarea';
import ScheduleSelect from './components/ScheduleSelect';
import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import CheckModalContent from './components/CheckModalContent';
import RequestComplete from './components/RequestComplete';
import { ArrowLeftIc } from '@assets/svgs';
import img_hbpromise from '@assets/images/img_hbpromise.png';
import { Header } from '@components/commons/Header';
import Banner from './components/Banner';
import TitleBox from '@components/commons/TitleBox';
import { SELECT_JUNIOR_TITLE } from './constants/constants';

const JuniorPromiseRequestPage = () => {
  const [activeButton, setActiveButton] = useState('선택할래요');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setUnfilledFields] = useState<number[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  // 약속 신청하기 눌렸는지 확인
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  // 적용할래요 눌렀는지 확인
  const [isModalClicked, setIsModalClicked] = useState(false);
  // 캘린더 여닫기
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  // 각 버튼마다 선택된 시간 저장
  const [selectedTime, setSelectedTime] = useState([
    { id: 0, selectedTime: '첫 번째 일정 선택하기', clickedDay: '' },
    { id: 1, selectedTime: '두 번째 일정 선택하기', clickedDay: '' },
    { id: 2, selectedTime: '세 번째 일정 선택하기', clickedDay: '' },
  ]);
  // 몇 번째 버튼이 눌렸니~
  const [btnId, setBtnId] = useState(0);
  // 선택한 고민 리스트
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  // 선배 Id, 닉네임 useLocation에서 가져오기(구조분해할당)
  const { seniorId, seniorNickname } = location.state || {};

  // onToggle 함수 정의
  const handleToggle = (button: string) => {
    setActiveButton(button);
  };

  // modal open 함수 정의
  const handleModalOpen = (bool: boolean) => {
    setIsModalOpen(bool);
  };

  // 모든 일정 선택했는지 확인
  const handleCheckAllSelected = () => {
    const unfilled = selectedTime
      .filter((item) => item.selectedTime === '' || item.clickedDay === '')
      .map((item) => item.id);
    setUnfilledFields(unfilled);
  };

  // 작성할래요 인풋 값 가져오기
  const [inputVal, setInputVal] = useState<string>('');
  const isTextareaFilled = inputVal.trim() !== '';
  const handleAppointmentSendSuccess = () => {
    setIsModalClicked(true);
  };

  const handleAppointmentSendError = (error: string) => {
    alert(error);
  };

  const { mutate: postAppointment } = usePostAppointment(handleAppointmentSendSuccess, handleAppointmentSendError);

  // 적용할래요 누르면 실행되는 함수
  const handlePostAppointment = () => {
    postAppointment({
      seniorId,
      topic: activeButton === '선택할래요' ? selectedButtons : [],
      personalTopic: activeButton === '작성할래요' ? inputVal : '',
      timeList: selectedTime.map((item) => ({
        date: item.clickedDay,
        startTime: item.selectedTime.split('-')[0],
        endTime: item.selectedTime.split('-')[1],
      })),
    });
  };

  // 모든 일정 선택했는지 확인. '선택할래요'인 경우 선택했는지 확인, '작성할래요'인 경우 텍스트 입력했는지 확인
  const isAllSelected =
    selectedTime.every((item) => item.selectedTime !== '' && item.clickedDay !== '') &&
    (activeButton === '선택할래요' ? selectedButtons.length > 0 : isTextareaFilled);

  // 버튼 클릭시 실행 함수
  const handleSubmit = () => {
    setIsSubmitClicked(true);
    if (isAllSelected) {
      handleModalOpen(true);
    }
  };

  return (
    <Wrapper>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={() => navigate(-1)} title={'약속 신청하기'} />
      <Divider />
      <Banner senior={`${seniorNickname} 선배`} />
      <HbPromiseImg src={img_hbpromise} />

      <Layout>
        <GrayLine1 />
        <TitleBox title={SELECT_JUNIOR_TITLE[0].title} description={SELECT_JUNIOR_TITLE[0].description} />
        <ScheduleSelect
          selectedTime={selectedTime}
          setIsCalendarOpen={setIsCalendarOpen}
          setBtnId={setBtnId}
          isSubmitClicked={isSubmitClicked}
        />
        <GrayLine2 />
        <TitleBox title={SELECT_JUNIOR_TITLE[1].title} description={SELECT_JUNIOR_TITLE[1].description} />
        <ToggleButton
          left="선택할래요"
          right="작성할래요"
          activeButton={activeButton}
          onSetActiveButtonHandler={handleToggle}
        />
        {activeButton === '선택할래요' ? (
          <WorryButtons selectedButtons={selectedButtons} setSelectedButtons={setSelectedButtons} />
        ) : (
          <WorryTextarea inputVal={inputVal} setInputVal={setInputVal} />
        )}
        <CalendarBottomSheet
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          isCalendarOpen={isCalendarOpen}
          setIsCalendarOpen={setIsCalendarOpen}
          btnId={btnId}
          handleCheckAllSelected={handleCheckAllSelected}
          seniorId={seniorId}
        />
        <PageBottomBar>
          <CostWrapper>
            <Label>총 결제금액</Label>
            <Cost>0원</Cost>
          </CostWrapper>
          <SubmitBtn type="button" onClick={handleSubmit} $isAllSelected={isAllSelected}>
            약속 신청하기
          </SubmitBtn>
        </PageBottomBar>
      </Layout>
      {isModalOpen && (
        <BtnCloseModal
          title={'약속 잡기 전 주의해주세요'}
          isModalOpen={isModalOpen}
          handleModalOpen={handleModalOpen}
          handleBtnClick={handlePostAppointment}
          btnText={'적용할래요'}>
          <CheckModalContent />
        </BtnCloseModal>
      )}
      {isModalClicked && <RequestComplete seniorNickname={seniorNickname} />}
    </Wrapper>
  );
};

export default JuniorPromiseRequestPage;

const HbPromiseImg = styled.img`
  position: absolute;
  top: 5rem;
  right: 0;

  width: 15.6rem;
  height: 12rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 20rem;
  left: 0;

  width: 100%;
  padding: 0 2rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const PageBottomBar = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 9.4rem;
  margin-left: -2rem;
  padding: 1.5rem 0 3rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  box-shadow: 0 -8px 30px rgb(0 0 0 / 10%);
`;

const CostWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;

  text-align: end;
`;
const SubmitBtn = styled.button<{ $isAllSelected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 5rem;
  margin: 0 2rem 0 0;
  border-radius: 8px;

  background-color: ${({ theme, $isAllSelected }) => ($isAllSelected ? theme.colors.Blue : theme.colors.grayScaleMG1)};

  ${({ theme }) => theme.fonts.Head2_SB_18};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
`;
const Label = styled.span`
  color: ${({ theme }) => theme.colors.grayScaleMG2};
  ${({ theme }) => theme.fonts.Title2_M_16};
`;
const Cost = styled.span`
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const GrayLine1 = styled.div`
  position: absolute;
  top: -2rem;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const GrayLine2 = styled.div`
  position: absolute;
  top: 28rem;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const Divider = styled.div`
  position: fixed;
  top: 5rem;
  z-index: 1;

  width: 100vw;
  border: 1.4px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;
