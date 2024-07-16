import { DeleteIc } from '@assets/svgs';
import styled from '@emotion/styled';
import DurationSelect from '@pages/seniorProfile/components/common/DurationSelect';
import { TimeCategoryType, preferredTimeType, weekendType, TimePropType } from '@pages/seniorProfile/types';

const TimeWeekdays = ({ profile, setProfile, isWarning }: TimePropType) => {
  const weekendsSetProfile =
    (key: weekendType) => (timeCategory: TimeCategoryType) => (selectedValue: string | boolean) =>
      setProfile((prev) => ({
        ...prev,
        preferredTimeList: {
          ...prev.preferredTimeList,
          weekend: {
            ...prev.preferredTimeList.weekend,
            [key]: prev.preferredTimeList.weekend[key].map((time: preferredTimeType) => ({
              ...time,
              [timeCategory]: selectedValue,
            })),
          },
        },
      }));

  return (
    <Wrapper>
      <CategoryText>주중</CategoryText>
      <TimeContainer>
        <DurationSelect
          selectValue={profile.preferredTimeList.weekend.주중[0]}
          setProfile={weekendsSetProfile('주중')}
          defaultActive={!!profile.preferredTimeList.weekend.주중[0].isActive}
          isWarning={isWarning}
        />
      </TimeContainer>
      <CategoryText>주말</CategoryText>
      <TimeContainer>
        <DurationSelect
          selectValue={profile.preferredTimeList.weekend.주말[0]}
          setProfile={weekendsSetProfile('주말')}
          defaultActive={!!profile.preferredTimeList.weekend.주말[0].isActive}
          isWarning={isWarning}
        />
      </TimeContainer>
    </Wrapper>
  );
};

export default TimeWeekdays;

export const Wrapper = styled.div`
  padding-left: 2rem;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 3.4rem;
`;

const CategoryText = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  padding-bottom: 0.8rem;
`;

export const DeleteIcon = styled(DeleteIc)`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: 2rem;
  padding: 0.8rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  cursor: pointer;
`;
