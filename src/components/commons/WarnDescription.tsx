import styled from '@emotion/styled';
import { ErrorIc } from '../../assets/svgs';

interface LimitWarnPropType {
  isLimit: boolean;
  warnText: string;
}

const WarnDescription = (props: LimitWarnPropType) => {
  const { isLimit, warnText } = props;
  return (
    <Wrapper $isLimit={isLimit}>
      <ErrorIc />
      <WarnText>{warnText}</WarnText>
    </Wrapper>
  );
};

export default WarnDescription;

const Wrapper = styled.div<{ $isLimit: boolean }>`
  display: ${({ $isLimit }) => ($isLimit ? 'none' : 'flex')};
  gap: 0.5rem;
  align-items: center;

  margin-top: 0.6rem;
`;

const WarnText = styled.span`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme }) => theme.colors.Red};
`;
