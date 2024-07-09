import styled from '@emotion/styled';
import { useState } from 'react';
import TimeAlldays from './TimeAlldays';
import TimeWeekdays from './TimeWeekdays';
import ToggleButton from '../../../components/commons/ToggleButton';

const TimeSelect = () => {
  const [isWeekday, setIsWeekday] = useState(false);
  return (
    <Wrapper>
      <ToggleButton left="주중/주말 선택" right="모든 요일 선택" />
      {isWeekday ? <TimeWeekdays /> : <TimeAlldays />}
    </Wrapper>
  );
};

export default TimeSelect;

const Wrapper = styled.div`
  padding-top: 3.2rem;
`;
