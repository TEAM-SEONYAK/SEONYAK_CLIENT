import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import CalendarBottomSheet from './CalendarBottomSheet';
import SelectJuniorWorryButton from './SelectJuniorWorryButton';
import SelectJuniorWorryTextBoxWrapper from './SelectJuniorWorryTextareaWrapper';
import SelectJuniorWorryTitleWrapper from './SelectJuniorWorryTitleWrapper';
import TimeSelectionButton from './TimeSelectionButton';
import TimeSelectionTitleWrapper from './TimeSelectionTitleWrapper';
import { BtnCloseModal } from '@components/commons/modal/BtnModal';
import CheckModalContent from './CheckModalContent';
import JuniorPromiseComplete from './JuniorPromiseComplete';
import { ArrowLeftIc, ImgHbpromiseIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import { useNavigate } from 'react-router-dom';
import Banner from './Banner';
import { usePostAppointment } from '../../hooks/queries';

interface SelectJuniorPromiseSectionPropType {
  seniorId: number;
  seniorNickname: string;
}

const SelectJuniorPromiseSection = ({ seniorId, seniorNickname }: SelectJuniorPromiseSectionPropType) => {
  const [activeButton, setActiveButton] = useState('선택할래요');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isAnyWorrySelected, setIsAnyWorrySelected] = useState(false);
  const [isTextareaFilled, setIsTextareaFilled] = useState(false);
  const [, setUnfilledFields] = useState<number[]>([]);
  const navigate = useNavigate();

  // 약속 신청하기 눌렸는지 확인
  const [isSubmitClicked, setIsSubmitCicked] = useState(false);
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

  // 걱정 버튼 중 하나라도 선택했는지 확인
  const handleCheckWorrySelected = (isSelected: boolean) => {
    setIsAnyWorrySelected(isSelected);
  };

  // 작성할래요 인풋 값 가져오기
  const [inputVal, setInputVal] = useState<string>('');
  const handleAppointmentSendSuccess = () => {
    setIsModalClicked(true);
  };
  const { mutate: postAppointment } = usePostAppointment(() => handleAppointmentSendSuccess());

  const handlePostAppointment = () => {
    if (isAllSelected) {
      postAppointment({
        seniorId: seniorId,
        topic: activeButton === '선택할래요' ? selectedButtons : [],
        personalTopic: activeButton === '선택할래요' ? '' : inputVal,
        timeList: [
          {
            date: selectedTime[0].clickedDay,
            startTime: selectedTime[0].selectedTime.split('-')[0],
            endTime: selectedTime[0].selectedTime.split('-')[1],
          },
          {
            date: selectedTime[1].clickedDay,
            startTime: selectedTime[1].selectedTime.split('-')[0],
            endTime: selectedTime[1].selectedTime.split('-')[1],
          },
          {
            date: selectedTime[2].clickedDay,
            startTime: selectedTime[2].selectedTime.split('-')[0],
            endTime: selectedTime[2].selectedTime.split('-')[1],
          },
        ],
      });
    }
  };

  // 버튼 클릭시 실행 함수
  const handleSubmit = (isAllSelected: boolean) => {
    setIsSubmitCicked(true);
    isAllSelected && handleModalOpen(true);
  };

  // isAllSelected 업데이트
  useEffect(() => {
    setIsAllSelected(
      selectedTime.every((item) => item.selectedTime !== '' && item.clickedDay !== '') &&
        (isAnyWorrySelected || isTextareaFilled),
    );
  }, [selectedTime, isAnyWorrySelected, isTextareaFilled]);

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} onClickLeft={() => navigate('/')} title={'약속 신청하기'} />
      <Wrapper>
        <Banner senior={`${seniorNickname} 선배`} />
        <ImgHbpromiseIcon />
        <GrayLine1 />
        <TimeSelectionTitleWrapper />
        <TimeSelectionButton
          selectedTime={selectedTime}
          setIsCalendarOpen={setIsCalendarOpen}
          setBtnId={setBtnId}
          isSubmitClicked={isSubmitClicked}
        />
        <GrayLine2 />
        <SelectJuniorWorryTitleWrapper />
        <ToggleButton
          left="선택할래요"
          right="작성할래요"
          activeButton={activeButton}
          onSetActiveButtonHandler={handleToggle}
        />
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
        {isModalClicked && <JuniorPromiseComplete seniorNickname={seniorNickname} />}
        {activeButton === '선택할래요' ? (
          <SelectJuniorWorryButton
            selectedButtons={selectedButtons}
            setSelectedButtons={setSelectedButtons}
            handleCheckWorrySelected={handleCheckWorrySelected}
          />
        ) : (
          <SelectJuniorWorryTextBoxWrapper
            inputVal={inputVal}
            setInputVal={setInputVal}
            setIsTextareaFilled={setIsTextareaFilled}
          />
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
          <SubmitBtn type="button" onClick={() => handleSubmit(isAllSelected)} $isAllSelected={isAllSelected}>
            약속 신청하기
          </SubmitBtn>
        </PageBottomBar>
      </Wrapper>
    </>
  );
};

export default SelectJuniorPromiseSection;

const ImgHbpromiseIcon = styled(ImgHbpromiseIc)`
  position: absolute;
  right: 0;

  width: 15.6rem;
  height: 12rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  left: 0;

  width: 100%;
  margin-top: 5rem;
  margin-bottom: 3rem;
  padding: 0 2rem;
  padding-bottom: 12.4rem;
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
  top: 17.2rem;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const GrayLine2 = styled.div`
  position: absolute;
  top: 49.9rem;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 1rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;
