import styled from '@emotion/styled';

const TimeSelectionTitleWrapper = () => {
  return (
    <Wrapper>
      <TimeSelectionTitle>선약 시간을 선택해주세요</TimeSelectionTitle>
      <TimeSelectionDescription>제안하신 3가지 일정 중 선배가 하나를 선택해요</TimeSelectionDescription>
    </Wrapper>
  );
};

export default TimeSelectionTitleWrapper;

const TimeSelectionTitle = styled.h3`
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
const TimeSelectionDescription = styled.span`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  position: relative;
  left: 2rem;

  width: 33.5rem;
  height: 4.9rem;
`;
