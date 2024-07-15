import styled from '@emotion/styled';
import { TimeCategoryType, preferredTimeType, funnelComponentPropType, weekendType } from '@pages/seniorProfile/types';
import DurationSelect from './common/DurationSelect';
import DeleteIc from '../../../assets/svgs/ic_delete_btn.svg?react';

const TimeWeekdays = ({ profile, setProfile }: funnelComponentPropType) => {
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
        />
      </TimeContainer>
      <CategoryText>주말</CategoryText>
      <TimeContainer>
        <DurationSelect
          selectValue={profile.preferredTimeList.weekend.주말[0]}
          setProfile={weekendsSetProfile('주말')}
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
