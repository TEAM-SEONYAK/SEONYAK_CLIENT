import styled from '@emotion/styled';
import React from 'react';
import EachTimeButton from './EachTimeButton';

interface TimeListPropType {
  selectedTime: { id: number; selectedTime: string; clickedDay: string }[];
  setSelectedTime: React.Dispatch<React.SetStateAction<{ id: number; selectedTime: string; clickedDay: string }[]>>;
  btnId: number;
}

const TimeList = ({ selectedTime, setSelectedTime, btnId }: TimeListPropType) => {
  const handleButtonClick = (time: string) => {
    setSelectedTime((prev) => prev.map((item) => (item.id === btnId ? { ...item, selectedTime: time } : item)));
  };

  return (
    <Wrapper>
      <Layout>
        <Label>오전</Label>
        <EachTimeButtonContainer>
          <EachTimeButton
            startTime="6:00"
            endTime="6:30"
            isActive={selectedTime[btnId].selectedTime === '6:00-6:30'}
            onClick={() => handleButtonClick('6:00-6:30')}
          />
          <EachTimeButton
            startTime="7:00"
            endTime="7:30"
            isActive={selectedTime[btnId].selectedTime === '7:00-7:30'}
            onClick={() => handleButtonClick('7:00-7:30')}
          />
          <EachTimeButton
            startTime="7:30"
            endTime="8:00"
            isActive={selectedTime[btnId].selectedTime === '7:30-8:00'}
            onClick={() => handleButtonClick('7:30-8:00')}
          />
          <EachTimeButton
            startTime="8:00"
            endTime="8:30"
            isActive={selectedTime[btnId].selectedTime === '8:00-8:30'}
            onClick={() => handleButtonClick('8:00-8:30')}
          />
        </EachTimeButtonContainer>
      </Layout>

      <Layout>
        <Label>오후</Label>
        <EachTimeButtonContainer>
          <EachTimeButton
            startTime="12:00"
            endTime="12:30"
            isActive={selectedTime[btnId].selectedTime === '12:00-12:30'}
            onClick={() => handleButtonClick('12:00-12:30')}
          />
          <EachTimeButton
            startTime="1:00"
            endTime="1:30"
            isActive={selectedTime[btnId].selectedTime === '1:00-1:30'}
            onClick={() => handleButtonClick('1:00-1:30')}
          />
          <EachTimeButton
            startTime="1:30"
            endTime="2:00"
            isActive={selectedTime[btnId].selectedTime === '1:30-2:00'}
            onClick={() => handleButtonClick('1:30-2:00')}
          />
          <EachTimeButton
            startTime="2:00"
            endTime="2:30"
            isActive={selectedTime[btnId].selectedTime === '2:00-2:30'}
            onClick={() => handleButtonClick('2:00-2:30')}
          />
        </EachTimeButtonContainer>
      </Layout>
    </Wrapper>
  );
};

export default TimeList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;

  padding-bottom: 9.4rem;
  padding-left: 1.3rem;
`;

const Layout = styled.div`
  display: grid;
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
