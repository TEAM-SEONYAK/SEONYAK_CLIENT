import styled from '@emotion/styled';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { formatCalDateToString } from '../utils/formatCalDateToString';
import { extractValidKeys } from '../utils/getSeniorValidWeekOfDay';

interface CalendarTileProperties {
  date: Date;
  view: string;
}

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

  const preferredDaysofWeek = extractValidKeys(preferredTimeList);

  const handleDateClick = (date: string) => {
    setSelectedTime((prev) => prev.map((item) => (item.id === btnId ? { ...item, clickedDay: date } : item)));
  };

  const tileDisabled = ({ date, view }: CalendarTileProperties) => {
    // 'month' 뷰가 아닌 경우엔 비활성화 X
    if (view !== 'month') return false;

    const formattedDate = formatCalDateToString(date);
    const dayOfWeek = dayOfWeekMap[date.getDay()];

    // 오늘 이전의 날짜는 비활성화
    const isPastDate = date <= new Date();

    // 이미 선택된 날짜는 비활성화
    const isAlreadySelected = selectedTime.some((item) => item.clickedDay === formattedDate);

    // 선호하는 요일이 아닌 날짜는 비활성화
    const isNotPreferredDay = !preferredDaysofWeek.includes(dayOfWeek);

    // 조건 중 하나라도 true이면 비활성화
    return isPastDate || isAlreadySelected || isNotPreferredDay;
  };

  const tileClassName = ({ date, view }: CalendarTileProperties) => {
    return view === 'month' && date <= new Date() ? 'disabled-date' : '';
  };

  return (
    <CalendarContainer>
      <StyledCalendar
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

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: auto;
  padding: 0 3.3rem 2rem;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleWhite};

  .disabled-date {
    color: ${({ theme }) => theme.colors.grayScaleLG2};

    cursor: not-allowed;
  }

  .react-calendar__month-view__days__day {
    ${({ theme }) => theme.fonts.Title2_M_16};
    color: ${({ theme }) => theme.colors.grayScaleBG};

    &:disabled {
      color: ${({ theme }) => theme.colors.grayScaleLG2};
    }
  }

  .react-calendar__month-view__days__day--weekend {
    ${({ theme }) => theme.fonts.Title2_M_16};
    color: ${({ theme }) => theme.colors.grayScaleBG};

    &:disabled {
      color: ${({ theme }) => theme.colors.grayScaleLG2};
    }
  }

  .react-calendar__month-view__weekdays {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
    ${({ theme }) => theme.fonts.Title2_M_16};
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;

    ${({ theme }) => theme.fonts.Head1_SB_20};
    margin-bottom: 0;
  }

  .react-calendar__navigation button {
    ${({ theme }) => theme.fonts.Head2_SB_18};
    min-width: 4rem;
  }

  .react-calendar__navigation button:disabled {
    background: none;

    color: ${({ theme }) => theme.colors.grayScaleDG};
  }

  .react-calendar__navigation button:hover,
  .react-calendar__navigation button:focus {
    background: none;
    background-color: transparent;

    color: ${({ theme }) => theme.colors.grayScaleDG};
  }

  .react-calendar__navigation__arrow {
    width: 2.1rem;
    height: 1.8rem;
  }

  .react-calendar__navigation__next-button {
    position: absolute;
    right: 6rem;
  }

  .react-calendar__navigation__prev-button {
    position: absolute;
    left: 6rem;
  }

  .react-calendar__navigation__label {
    pointer-events: none;

    cursor: default;

    &:hover {
      background-color: transparent;
    }
  }

  .react-calendar__tile {
    ${({ theme }) => theme.fonts.Title2_M_16};
    border-radius: 100px;

    background: none;

    text-align: center;

    cursor: pointer;
  }

  .react-calendar__tile--active {
    border-radius: 100px;

    background-color: ${({ theme }) => theme.colors.Blue};

    color: ${({ theme }) => theme.colors.grayScaleWhite};
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${({ theme }) => theme.colors.Blue};

    color: ${({ theme }) => theme.colors.grayScaleWhite};
  }

  .react-calendar__tile:enabled:focus {
    ${({ theme }) => theme.fonts.Title2_M_16};
    background: ${({ theme }) => theme.colors.Blue};

    color: ${({ theme }) => theme.colors.grayScaleWhite};
  }
`;
