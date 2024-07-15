import styled from '@emotion/styled';
import { HOUR_TIME, TIME_LIST, WEEKENDS } from '@pages/seniorProfile/constants';
import { dayOfWeekTimeList, dayType } from '@pages/seniorProfile/types';
import { isTimeActive } from '@pages/seniorProfile/utils/isTimeActive';

interface timeTablePropType {
  preferredTime: dayOfWeekTimeList;
}

const TimeTable = ({ preferredTime }: timeTablePropType) => {
  return (
    <>
      <DayOfWeekContainer>
        {WEEKENDS.map((w: dayType) => (
          <DayOfWeek key={w}>{w}</DayOfWeek>
        ))}
      </DayOfWeekContainer>
      <Wrapper>
        <TimeContainer>
          {HOUR_TIME.map((t) => (
            <Time key={t}>{t}</Time>
          ))}
        </TimeContainer>
        <Table preferredTime={preferredTime} />
      </Wrapper>
    </>
  );
};

const DayOfWeekContainer = styled.section`
  display: flex;
  justify-content: space-between;

  margin: 0 1.4rem 0.7rem 5.9rem;
`;

const DayOfWeek = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1.3rem;

  height: 62.9rem;
`;

const TimeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.1rem 0 0.2rem;
`;

const Time = styled.p`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;

const Table = ({ preferredTime }: timeTablePropType) => {
  return (
    <TableWrapper>
      <TableContainer>
        {TIME_LIST.map((t) => (
          <TableRow key={t}>
            {WEEKENDS.map((w: dayType) => {
              const cur = preferredTime[w][0];
              return (
                <TableCell
                  key={w}
                  $isActive={isTimeActive({ startTime: cur.startTime, endTime: cur.endTime, curTime: t })}
                />
              );
            })}
          </TableRow>
        ))}
      </TableContainer>
    </TableWrapper>
  );
};
export default TimeTable;

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-radius: 2px;
`;

const TableContainer = styled.table`
  width: 100%;
  height: 100%;
`;

const TableRow = styled.tr`
  height: 1.7rem;
`;

const TableCell = styled.td<{ $isActive: boolean }>`
  border-right: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.grayScaleLG1};
  border-left: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.primaryBlue200 : '')};
`;
