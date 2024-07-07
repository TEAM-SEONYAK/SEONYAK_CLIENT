import styled from '@emotion/styled';
import { ErrorIc } from '../../assets/svgs';

interface LimitWarnPropType {
  show: boolean;
  warnText: string;
}

const WarnDescription = (props: LimitWarnPropType) => {
  const { show, warnText } = props;
  return (
    <Wrapper $show={show}>
      <ErrorIc />
      <WarnText>{warnText}</WarnText>
    </Wrapper>
  );
};

export default WarnDescription;

const Wrapper = styled.div<{ $show: boolean }>`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  gap: 0.5rem;
  align-items: center;

  width: 100%;
`;

const WarnText = styled.span`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme }) => theme.colors.Red};
`;
