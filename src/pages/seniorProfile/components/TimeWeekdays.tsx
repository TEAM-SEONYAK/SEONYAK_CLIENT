import styled from '@emotion/styled';
import DurationSelect from './common/DurationSelect';
import DeleteIc from '../../../assets/svgs/ic_delete_btn.svg?react';

const TimeWeekdays = () => {
  return (
    <Wrapper>
      <CategoryText>주중</CategoryText>
      <TimeContainer>
        <DurationSelect />
      </TimeContainer>
      <CategoryText>주말</CategoryText>
      <TimeContainer>
        <DurationSelect />
      </TimeContainer>
    </Wrapper>
  );
};

export default TimeWeekdays;

export const Wrapper = styled.div`
  padding: 2rem 0 0 2rem;
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
