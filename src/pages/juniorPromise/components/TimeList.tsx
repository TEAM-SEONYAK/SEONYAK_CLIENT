import styled from '@emotion/styled';
import React from 'react';
import EachTimeButton from './EachTimeButton';
import { splitTimeRange } from '../utils/changeFormat30Min';

interface TimeListPropType {
  timeList: any;
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  setSelectedTime: React.Dispatch<React.SetStateAction<{ id: number; selectedTime: string; clickedDay: string }[]>>;
  btnId: number;
}

const TimeList = ({ selectedTime, setSelectedTime, btnId, timeList }: TimeListPropType) => {
  const handleButtonClick = (time: string) => {
    setSelectedTime((prev) => prev.map((item) => (item.id === btnId ? { ...item, selectedTime: time } : item)));
  };

  const splitTimeList = timeList && timeList.flatMap(({ startTime, endTime }) => splitTimeRange(startTime, endTime));
  console.log(splitTimeList);

  return (
    <Wrapper>
      <Layout>
        <Label>오전</Label>
        <EachTimeButtonContainer>
          {splitTimeList &&
            splitTimeList.map(({ startTime, endTime }) => (
              <EachTimeButton
                startTime={startTime}
                endTime={endTime}
                isActive={selectedTime[btnId].selectedTime === `${startTime}-${endTime}`}
                onClick={() => handleButtonClick(`${startTime}-${endTime}`)}
              />
            ))}
        </EachTimeButtonContainer>
      </Layout>

      <Layout>
        <Label>오후</Label>
       
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
  padding-left: 1.3rem;
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
`;
