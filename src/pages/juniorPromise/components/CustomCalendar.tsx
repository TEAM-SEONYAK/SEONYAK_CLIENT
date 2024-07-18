import { BottomSheetRectangleIc } from '@assets/svgs';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatCalDateToString } from '../utils/formatCalDateToString';
import { getTomorrow } from '../utils/getTomorrow';

interface CalendarTileProperties {
  date: Date;
  view: string;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CustomCalendarPropType {
  btnId: number;
  setSelectedTime: React.Dispatch<React.SetStateAction<{ id: number; selectedTime: string; clickedDay: string }[]>>;
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  preferredTimeList: any;
}

const CustomCalendar = ({ btnId, setSelectedTime, selectedTime, preferredTimeList }: CustomCalendarPropType) => {
  const dayOfWeekMap: { [key: number]: string } = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토',
  };
  const preferredDaysofWeek = Object.keys(preferredTimeList);

  const [, onChange] = useState<Value>(getTomorrow());

  const handleDateClick = (date: string) => {
    setSelectedTime((prev) => prev.map((item) => (item.id === btnId ? { ...item, clickedDay: date } : item)));
  };

  const tileDisabled = ({ date, view }: CalendarTileProperties) => {
    if (view === 'month') {
      // 현재 날짜 이전의 날짜를 비활성화
      if (date <= new Date()) {
        return true;
      }

      // 이미 선택된 날짜를 비활성화
      const formattedDate = formatCalDateToString(date);
      if (selectedTime.some((item) => item.clickedDay === formattedDate)) {
        return true;
      }

      // 요일을 확인하여 preferredDaysofWeek에 없는 요일을 비활성화
      const dayOfWeek = date.getDay();
      const dayOfWeekStr = dayOfWeekMap[dayOfWeek];
      if (!preferredDaysofWeek.includes(dayOfWeekStr)) {
        return true;
      }
    }
    return false;
  };

  const tileClassName = ({ date, view }: CalendarTileProperties) =>
    view === 'month' && date <= new Date() ? 'disabled-date' : '';

  return (
    <CalendarContainer>
      <BottomSheetRectangleIcon />
      <StyledCalendar
        onChange={onChange}
        onClickDay={(value) => handleDateClick(formatCalDateToString(value))}
        value={selectedTime[btnId].clickedDay}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        calendarType={'iso8601'}
        formatDay={(_, date) => date.getDate().toString()}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;

const BottomSheetRectangleIcon = styled(BottomSheetRectangleIc)`
  margin-bottom: 0.5rem;
  margin-left: 13rem;
`;

const CalendarContainer = styled.div`
  width: 100vw;
  /* height: 39.5rem; */
  height: auto;
  padding: 1.5rem 3.3rem 2rem;
  border-radius: 16px 16px 0 0;

  background: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleWhite};

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ theme }) => theme.fonts.Head1_SB_20};
  }

  .react-calendar__navigation__arrow {
    width: 2.1rem;
    height: 1.8rem;
  }

  .react-calendar__tile {
    max-width: 100%;
    ${({ theme }) => theme.fonts.Title2_M_16};
    border-radius: 100px;

    background: none;

    text-align: center;

    cursor: pointer;
  }

  .react-calendar__tile--active {
    border-radius: 100px;

    background-color: ${({ theme }) => theme.colors.Blue};

    color: ${({ theme }) => theme.colors.grayScaleWhite} !important;
  }

  .react-calendar__month-view__weekdays {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
    ${({ theme }) => theme.fonts.Title2_M_16};
  }

  .react-calendar__tile:enabled:focus {
    ${({ theme }) => theme.fonts.Title2_M_16};
    background: ${({ theme }) => theme.colors.Blue};

    color: ${({ theme }) => theme.colors.grayScaleWhite};
  }

  .react-calendar__navigation button {
    ${({ theme }) => theme.fonts.Head2_SB_18};
    min-width: 4rem;
  }

  .react-calendar__navigation button:disabled {
    background: none !important;

    color: ${({ theme }) => theme.colors.grayScaleDG} !important;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.colors.Blue};

    color: ${({ theme }) => theme.colors.grayScaleWhite};
  }

  .react-calendar__navigation button:hover,
  .react-calendar__navigation button:focus {
    background: none;
    background-color: transparent;

    color: ${({ theme }) => theme.colors.grayScaleDG};
  }

  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button {
    border-radius: 100px;
  }

  .react-calendar__month-view__days__day--weekend {
    ${({ theme }) => theme.fonts.Title2_M_16};
    color: ${({ theme }) => theme.colors.grayScaleBG};

    &:disabled {
      color: ${({ theme }) => theme.colors.grayScaleLG2};
    }
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .disabled-date {
    color: ${({ theme }) => theme.colors.grayScaleLG2} !important;

    cursor: not-allowed;
  }

  .react-calendar__month-view__days__day {
    ${({ theme }) => theme.fonts.Title2_M_16};
    color: ${({ theme }) => theme.colors.grayScaleBG};

    &:disabled {
      color: ${({ theme }) => theme.colors.grayScaleLG2};
    }
  }
`;
