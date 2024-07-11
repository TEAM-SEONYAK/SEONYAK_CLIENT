import styled from '@emotion/styled/';

interface summaryPropType {
  description1: string;
  description2: number;
  description3: string;
}

const ProfileSummary = ({ description1, description2, description3 }: summaryPropType) => {
  return (
    <Wrapper>
      <Container>
        <Meta>후기</Meta>
        <Description>{description1}</Description>
      </Container>
      <Divider />
      <Container>
        <Meta>경력</Meta>
        <Description>{description2}년차</Description>
      </Container>
      <Divider />
      <Container>
        <Meta>응답률</Meta>
        <Description>{description3}</Description>
      </Container>
    </Wrapper>
  );
};

export default ProfileSummary;

const Wrapper = styled.div`
  display: flex;
  margin: 0 2rem;
  padding: 1.2rem;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11.2rem;
`;

const Meta = styled.p`
  ${({ theme }) => theme.fonts.Caption3_M_12};
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const Divider = styled.hr`
  height: 1.6rem;
  width: 0px;
  stroke-width: 1.6px;
  stroke: ${({ theme }) => theme.colors.grayScaleLG2};
`;
