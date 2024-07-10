import styled from '@emotion/styled';
import { ErrorIc } from '../../assets/svgs';

interface LimitWarnPropType {
  isShown: boolean;
  warnText: string;
}

const WarnDescription = (props: LimitWarnPropType) => {
  const { isShown, warnText } = props;
  return (
    <Wrapper $isShown={isShown}>
      <ErrorIc />
      <WarnText>{warnText}</WarnText>
    </Wrapper>
  );
};

export default WarnDescription;

const Wrapper = styled.div<{ $isShown: boolean }>`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  width: 100%;

  opacity: ${({ $isShown }) => !$isShown && '0'};
`;

const WarnText = styled.span`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme }) => theme.colors.Red};
`;
