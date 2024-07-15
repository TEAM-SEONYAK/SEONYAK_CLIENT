import ToggleButton from '@components/commons/ToggleButton';
import styled from '@emotion/styled';
import { useState } from 'react';
import CalendarBottomSheet from './CalendarBottomSheet';
import GrayLine from './GrayLine';
import SelectJuniorWorryButton from '../components/SelectJuniorWorryButton';
import SelectJuniorWorryTextBoxWrapper from '../components/SelectJuniorWorryTextareaWrapper';
import SelectJuniorWorryTitleWrapper from '../components/SelectJuniorWorryTitleWrapper';
import TimeSelectionButton from '../components/TimeSelectionButton';
import TimeSelectionTitleWrapper from '../components/TimeSelectionTitleWrapper';

const SelectJuniorPromiseSection = () => {
  const [activeButton, setActiveButton] = useState<'left' | 'right'>('left');
  const [isAllSelected, setIsAllSelected] = useState(false);

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
  const handleToggle = (button: 'left' | 'right') => {
    setActiveButton(button);
  };

  const handleCheckAllSelected = (isAllSelected: boolean) => {
    setIsAllSelected(isAllSelected);
  };

  console.log(selectedTime);

  return (
    <TimeSelectionContainer>
      <TimeSelectionTitleWrapper />
      <TimeSelectionButton
        selectedTime={selectedTime}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        setSelectedTime={setSelectedTime}
        setBtnId={setBtnId}
        handleCheckAllSelected={handleCheckAllSelected}
      />
      <GrayLine />
      <SelectJuniorWorryTitleWrapper />
      <ToggleButton left="선택할게요" right="작성할게요" activeButton={activeButton} onToggle={handleToggle} />
      {activeButton === 'left' ? <SelectJuniorWorryButton /> : <SelectJuniorWorryTextBoxWrapper />}
      <CalendarBottomSheet
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        isCalendarOpen={isCalendarOpen}
        setIsCalendarOpen={setIsCalendarOpen}
        btnId={btnId}
      />
      <PageBottomBar>
        <CostWrapper>
          <Label>총 결제금액</Label>
          <Cost>0원</Cost>
        </CostWrapper>
        <SubmitBtn type="button" $isAllSelected={isAllSelected}>
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
