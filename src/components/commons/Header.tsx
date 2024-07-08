import styled from '@emotion/styled';
import React from 'react';

interface HeaderPropType {
  LeftSvg?: React.FunctionComponent<React.ComponentProps<'svg'>>;
  RightSvg?: React.FunctionComponent<React.ComponentProps<'svg'>>;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  title?: string;
}

export const Header = (props: HeaderPropType) => {
  const { LeftSvg, onClickLeft, onClickRight, RightSvg, title } = props;
  return (
    <Wrapper>
      {LeftSvg && (
        <LeftSvgWrapper>
          <LeftSvg onClick={onClickLeft} />
        </LeftSvgWrapper>
      )}
      {title ? <Title>{title}</Title> : <></>}
      {RightSvg && (
        <RightSvgWrapper>
          <RightSvg onClick={onClickRight} />
        </RightSvgWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 4.4rem;
  padding: 1.1rem 2rem;

  background-color: transparent;
`;

const Title = styled.span`
  ${({ theme }) => theme.fonts.Title1_SB_16}
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const LeftSvgWrapper = styled.div`
  position: absolute;
  left: 2rem;

  cursor: pointer;
`;
const RightSvgWrapper = styled.div`
  position: absolute;
  right: 2rem;

  cursor: pointer;
`;
