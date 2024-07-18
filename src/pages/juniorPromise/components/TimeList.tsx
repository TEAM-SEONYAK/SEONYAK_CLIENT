import styled from '@emotion/styled';
import React from 'react';
import EachTimeButton from './EachTimeButton';
import { splitTimeRange, isAMTime } from '../utils/changeFormat30Min';

interface TimeListType {
  startTime: string;
  endTime: string;
}

interface TimeListPropType {
  timeList: TimeListType[];
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  setSelectedTime: React.Dispatch<React.SetStateAction<{ id: number; selectedTime: string; clickedDay: string }[]>>;
  btnId: number;
}

const TimeList = ({ selectedTime, setSelectedTime, btnId, timeList }: TimeListPropType) => {
  const handleButtonClick = (time: string) => {
    setSelectedTime((prev) => prev.map((item) => (item.id === btnId ? { ...item, selectedTime: time } : item)));
  };

  const splitTimeList = timeList && timeList.flatMap(({ startTime, endTime }) => splitTimeRange(startTime, endTime));

  const morningTimeList = splitTimeList && splitTimeList.filter(({ startTime }) => isAMTime(startTime));
  const afternoonTimeList = splitTimeList && splitTimeList.filter(({ startTime }) => !isAMTime(startTime));

  return (
    <Wrapper>
      <Layout>
        {morningTimeList && morningTimeList.length !== 0 && (
          <>
            <Label>오전</Label>
            <EachTimeButtonContainer>
              {morningTimeList &&
                morningTimeList.map(({ startTime, endTime }, idx: number) => (
                  <EachTimeButton
                    key={startTime + idx}
                    startTime={startTime}
                    endTime={endTime}
                    isActive={selectedTime[btnId].selectedTime === `${startTime}-${endTime}`}
                    onClick={() => handleButtonClick(`${startTime}-${endTime}`)}
                  />
                ))}
            </EachTimeButtonContainer>
          </>
        )}
      </Layout>

      <Layout>
        {afternoonTimeList && afternoonTimeList.length !== 0 && (
          <>
            <Label>오후</Label>
            <EachTimeButtonContainer>
              {afternoonTimeList &&
                afternoonTimeList.map(({ startTime, endTime }, idx: number) => (
                  <EachTimeButton
                    key={startTime + idx}
                    startTime={startTime}
                    endTime={endTime}
                    isActive={selectedTime[btnId].selectedTime === `${startTime}-${endTime}`}
                    onClick={() => handleButtonClick(`${startTime}-${endTime}`)}
                  />
                ))}
            </EachTimeButtonContainer>
          </>
        )}
      </Layout>
    </Wrapper>
  );
};

export default TimeList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding-bottom: 14.4rem;
`;

const Layout = styled.div`
  display: grid;
  overflow-y: auto;
`;

const Label = styled.div`
  padding: 2rem 0 0 1.9rem;

  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const EachTimeButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1.5rem;
`;
