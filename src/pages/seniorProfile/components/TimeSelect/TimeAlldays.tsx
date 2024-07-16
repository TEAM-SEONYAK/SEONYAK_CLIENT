import styled from '@emotion/styled';
import { DAYOFWEEK_LIST } from '@pages/seniorProfile/constants';
import { TimeCategoryType, dayType, preferredTimeType, TimePropType } from '@pages/seniorProfile/types';
import DurationSelect from '../common/DurationSelect';

const TimeAlldays = ({ profile, setProfile, isWarning }: TimePropType) => {
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
      {DAYOFWEEK_LIST.map((w, idx) => (
        <Container key={idx}>
          <CategoryText>{w}</CategoryText>
          <DurationSelect
            variant="secondary"
            selectValue={profile.preferredTimeList.dayOfWeek[w][0]}
            setProfile={dayOfWeekSetProfile(w)}
            defaultActive={!!profile.preferredTimeList.dayOfWeek[w][0].isActive}
            isWarning={isWarning}
          />
        </Container>
      ))}
    </Wrapper>
  );
};

export default TimeAlldays;

const Wrapper = styled.div`
  overflow-y: scroll;

  padding: 0 2rem 10rem;
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
