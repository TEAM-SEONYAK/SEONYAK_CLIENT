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
}

const CustomCalendar = ({ btnId, setSelectedTime }: CustomCalendarPropType) => {
  // 초기값을 내일 날짜로 설정
  const [value, onChange] = useState<Value>(getTomorrow());

  const handleDateClick = (date: string) => {
    setSelectedTime((prev) => prev.map((item) => (item.id === btnId ? { ...item, clickedDay: date } : item)));
  };

  const tileDisabled = ({ date, view }: CalendarTileProperties) => {
    return view === 'month' && date <= new Date();
  };

  const tileClassName = ({ date, view }: CalendarTileProperties) =>
    view === 'month' && date <= new Date() ? 'disabled-date' : '';
  return (
    <CalendarContainer>
      <StyledCalendar
        onChange={onChange}
        onClickDay={(value) => handleDateClick(formatCalDateToString(value))}
        value={value}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        calendarType={'iso8601'}
        formatDay={(locale, date) => date.getDate().toString()}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;

const CalendarContainer = styled.div`
  max-width: 100%;

  background: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  padding-bottom: 3rem;
  border: none;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleWhite};

  .react-calendar__navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 0 7rem;
  }

  .react-calendar__tile {
    max-width: 100%;
    ${({ theme }) => theme.fonts.Title2_M_16};
    padding: 1.1rem 0;
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
    background: none;

    color: ${({ theme }) => theme.colors.grayScaleDG};
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
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }

  .disabled-date {
    color: ${({ theme }) => theme.colors.grayScaleLG2} !important;

    cursor: not-allowed;
  }
`;
