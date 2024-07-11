import styled from '@emotion/styled';

interface EachButtonPropType {
  startTime: string;
  endTime: string;
}

const EachTimeButton = (props: EachButtonPropType) => {
  const { startTime, endTime } = props;

  return (
    <Wrapper>
      {startTime} ~ {endTime}
    </Wrapper>
  );
};

export default EachTimeButton;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10.8rem;
  height: 3.8rem;
  margin: 0.5rem 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
  border-radius: 8px;

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleMG1};
`;
