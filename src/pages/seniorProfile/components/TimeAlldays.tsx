import styled from '@emotion/styled';
import { TimeCategoryType, dayType, preferredTimeType, funnelComponentPropType } from '@pages/seniorProfile/types';
import DurationSelect from './common/DurationSelect';
import { WEEKENDS } from '../constants';

const TimeAlldays = ({ profile, setProfile }: funnelComponentPropType) => {
  const dayOfWeekSetProfile = (key: dayType) => (timeCategory: TimeCategoryType) => (selectedValue: string | boolean) =>
    setProfile((prev) => ({
      ...prev,
      preferredTimeList: {
        ...prev.preferredTimeList,
        dayOfWeek: {
          ...prev.preferredTimeList.dayOfWeek,
          [key]: prev.preferredTimeList.dayOfWeek[key].map((time: preferredTimeType) => ({
            ...time,
            [timeCategory]: selectedValue,
          })),
        },
      },
    }));

  return (
    <Wrapper>
      {WEEKENDS.map((w, idx) => (
        <Container key={idx}>
          <CategoryText>{w}</CategoryText>
          <DurationSelect
            variant="secondary"
            selectValue={profile.preferredTimeList.dayOfWeek[w][0]}
            setProfile={dayOfWeekSetProfile(w)}
          />
        </Container>
      ))}
    </Wrapper>
  );
};

export default TimeAlldays;

const Wrapper = styled.div`
  padding-left: 2rem;
`;

const Container = styled.section`
  display: flex;
  align-items: center;

  padding-bottom: 1rem;
`;

const CategoryText = styled.div`
  ${({ theme }) => theme.fonts.Body3_SB_14};
  padding-right: 1rem;
`;
