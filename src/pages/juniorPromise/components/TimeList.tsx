import styled from '@emotion/styled';
import EachTimeButton from './EachTimeButton';

const TimeList = () => {
  return (
    <Wrapper>
      <Layout>
        <Label>오전</Label>
        <EachTimeButtonContainer>
          <EachTimeButton startTime={'6:00'} endTime={'6:30'} />
          <EachTimeButton startTime={'6:00'} endTime={'6:30'} />
          <EachTimeButton startTime={'6:00'} endTime={'6:30'} />
          <EachTimeButton startTime={'6:00'} endTime={'6:30'} />
          <EachTimeButton startTime={'6:00'} endTime={'6:30'} />
          <EachTimeButton startTime={'6:00'} endTime={'6:30'} />
        </EachTimeButtonContainer>
      </Layout>

      <Layout>
        <Label>오후</Label>
        <EachTimeButtonContainer>
          <EachTimeButton startTime={'12:00'} endTime={'12:30'} />
          <EachTimeButton startTime={'12:00'} endTime={'12:30'} />
          <EachTimeButton startTime={'12:00'} endTime={'12:30'} />
          <EachTimeButton startTime={'12:00'} endTime={'12:30'} />
          <EachTimeButton startTime={'12:00'} endTime={'12:30'} />
          <EachTimeButton startTime={'12:00'} endTime={'12:30'} />
        </EachTimeButtonContainer>
      </Layout>
    </Wrapper>
  );
};

export default TimeList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: center;
`;
