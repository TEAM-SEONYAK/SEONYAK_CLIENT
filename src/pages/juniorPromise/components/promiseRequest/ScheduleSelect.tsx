import styled from '@emotion/styled';
import { formatBtnDateToString } from '../../utils/formatBtnDateToString';
import { ButtonCheckIc } from '../../../../assets/svgs';
import { TIME_SELECTION_BUTTON } from '../../constants/constants';
import WarnDescription from '@components/commons/WarnDescription';

interface ScheduleSelectProps {
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  setIsCalendarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setBtnId: React.Dispatch<React.SetStateAction<number>>;
  isSubmitClicked: boolean;
}

const ScheduleSelect: React.FC<ScheduleSelectProps> = ({
  selectedTime,
  setIsCalendarOpen,
  setBtnId,
  isSubmitClicked,
}: ScheduleSelectProps) => {
  const handleTimeSelectBtn = (btnId: number) => {
    setIsCalendarOpen(true);
    setBtnId(btnId);
  };

  return (
    <Wrapper>
      {selectedTime.map((item, idx) => (
        <TimeBtn
          key={item.id}
          $isActive={item.selectedTime !== TIME_SELECTION_BUTTON[idx]}
          $isUnfilled={isSubmitClicked && item.selectedTime === TIME_SELECTION_BUTTON[idx]}
          onClick={() => handleTimeSelectBtn(item.id)}>
          {item.selectedTime !== TIME_SELECTION_BUTTON[idx] && formatBtnDateToString(item.clickedDay)} {''}
          {item.selectedTime}
          <ButtonCheckIcon isactive={(item.selectedTime !== TIME_SELECTION_BUTTON[idx]).toString()} />
        </TimeBtn>
      ))}
      <WarnDescription
        isShown={
          isSubmitClicked &&
          (selectedTime[0].selectedTime === TIME_SELECTION_BUTTON[0] ||
            selectedTime[1].selectedTime === TIME_SELECTION_BUTTON[1] ||
            selectedTime[2].selectedTime === TIME_SELECTION_BUTTON[2])
        }
        warnText={'시간을 입력해주세요'}
      />
    </Wrapper>
  );
};

export default ScheduleSelect;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const TimeBtn = styled.div<{ $isActive: boolean; $isUnfilled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding: 1.2rem 1.359rem 1.1rem 2rem;
  border: 1px solid
    ${({ theme, $isActive, $isUnfilled }) =>
      $isUnfilled ? theme.colors.Red : $isActive ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2};
  border-radius: 8px;

  background-color: ${({ theme, $isActive, $isUnfilled }) =>
    $isUnfilled
      ? theme.colors.transparentRed_3
      : $isActive
        ? theme.colors.transparentBlue_5
        : theme.colors.grayScaleWG};

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grayScaleBlack : theme.colors.grayScaleDG)};

  ${({ theme }) => theme.fonts.Title2_M_16};
  cursor: pointer;
`;

const ButtonCheckIcon = styled(ButtonCheckIc)<{ isactive: string }>`
  display: ${({ isactive }) => (isactive === 'true' ? 'block' : 'none')};
`;
