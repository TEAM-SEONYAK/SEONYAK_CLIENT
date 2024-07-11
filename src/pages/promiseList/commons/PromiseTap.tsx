import styled from '@emotion/styled';

const PromiseTap = () => {
  return (
    <Wrapper>
      <TapContainer>
        <TapText $isActive={true}>확정 대기</TapText>
        <TapText $isActive={false}>예정 약속</TapText>
        <TapText $isActive={false}>지난 약속</TapText>
      </TapContainer>
    </Wrapper>
  );
};

export default PromiseTap;

const Wrapper = styled.div`
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const TapContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.5rem 4.7rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayScaleLG1};
`;
const TapText = styled.span<{ $isActive: boolean }>`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.grayScaleBG : theme.colors.grayScaleMG2)};
`;
