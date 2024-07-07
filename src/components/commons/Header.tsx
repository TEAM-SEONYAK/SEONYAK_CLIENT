import styled from '@emotion/styled';
import { ArrowLeftIc } from '../../assets/svgs';

interface DefaultHeaderPropType {
  title: string;
  onClick: () => void;
}

export const DefaultHeader = (props: DefaultHeaderPropType) => {
  const { title, onClick } = props;
  return (
    <Wrapper>
      <ArrowLeftIcon onClick={onClick} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  padding: 1.4rem 2rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const ArrowLeftIcon = styled(ArrowLeftIc)`
  position: absolute;
  left: 2rem;

  cursor: pointer;
`;

const Title = styled.span`
  ${({ theme }) => theme.fonts.Title1_SB_16}
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;
