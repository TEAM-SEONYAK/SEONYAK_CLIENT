import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import CalendarBottomSheet from './CalendarBottomSheet';
import GrayLine from './GrayLine';
import SelectJuniorWorryButton from '../components/SelectJuniorWorryButton';
import SelectJuniorWorryTextBoxWrapper from '../components/SelectJuniorWorryTextareaWrapper';
import SelectJuniorWorryTitleWrapper from '../components/SelectJuniorWorryTitleWrapper';
import TimeSelectionButton from '../components/TimeSelectionButton';
import TimeSelectionTitleWrapper from '../components/TimeSelectionTitleWrapper';

const SelectJuniorPromiseSection = () => {
  const [activeButton, setActiveButton] = useState('선택할래요');
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [isAnyWorrySelected, setIsAnyWorrySelected] = useState(false);
  const [isTextareaFilled, setIsTextareaFilled] = useState(false);
  const [unfilledFields, setUnfilledFields] = useState<number[]>([]);
  // 약속 신청하기 눌렸는지 확인
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

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

  // onToggle 함수 정의
  const handleToggle = (button: string) => {
    setActiveButton(button);
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
    // console.log(isSelected);
  };

  // isAllSelected 업데이트
  useEffect(() => {
    setIsAllSelected(
      selectedTime.every((item) => item.selectedTime !== '' && item.clickedDay !== '') &&
        (isAnyWorrySelected || isTextareaFilled),
    );
  }, [selectedTime, isAnyWorrySelected, isTextareaFilled]);

  const handleSubmit = () => {
    setIsSubmitClicked(true);
  };

  return (
    <TimeSelectionContainer>
      <TimeSelectionTitleWrapper />
      <TimeSelectionButton
        selectedTime={selectedTime}
        setIsCalendarOpen={setIsCalendarOpen}
        setBtnId={setBtnId}
        unfilledFields={unfilledFields}
        isSubmitClicked={isSubmitClicked}
      />
      <GrayLine />
      <SelectJuniorWorryTitleWrapper />
      <ToggleButton
        left="선택할래요"
        right="작성할래요"
        activeButton={activeButton}
        onSetActiveButtonHandler={handleToggle}
      />
      {activeButton === '선택할래요' ? (
        <SelectJuniorWorryButton handleCheckWorrySelected={handleCheckWorrySelected} />
      ) : (
        <SelectJuniorWorryTextBoxWrapper setIsTextareaFilled={setIsTextareaFilled} />
      )}
      <CalendarBottomSheet
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        btnId={btnId}
        handleCheckAllSelected={handleCheckAllSelected}
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
    </TimeSelectionContainer>
  );
};

export default SelectJuniorPromiseSection;

const TimeSelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  padding: 0 2rem;
  padding-bottom: 12.4rem;
`;

const PageBottomBar = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 9.4rem;
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
