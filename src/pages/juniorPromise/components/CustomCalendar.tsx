import styled from '@emotion/styled';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CustomCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <CalendarContainer>
      <StyledCalendar
        onChange={onChange}
        value={value}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        calendarType={'iso8601'}
        defaultValue={[new Date(2024, 7, 1), new Date(2024, 7, 1)]}
        formatDay={(locale, date) => date.getDate().toString()}
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;

const CalendarContainer = styled.div`
  max-width: 100%;
  padding: 20px;

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
    border-radius: 100px;

    background: none;

    text-align: center;

    cursor: pointer;
  }

  .react-calendar__tile--active {
    border-radius: 100px;

    background-color: ${({ theme }) => theme.colors.Blue};
  }

  .react-calendar__month-view__weekdays {
    color: ${({ theme }) => theme.colors.grayScaleMG2};

    ${({ theme }) => theme.fonts.Title2_M_16};
  }

  .react-calendar__tile:enabled:focus {
    ${({ theme }) => theme.fonts.Title2_M_16};
    background: ${({ theme }) => theme.colors.Blue};
  }

  .react-calendar__navigation button {
    ${({ theme }) => theme.fonts.Head2_SB_18};
  }

  .react-calendar__navigation button:disabled {
    background: none;
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
`;
