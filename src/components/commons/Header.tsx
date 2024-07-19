import styled from '@emotion/styled';
import React from 'react';

interface HeaderPropType {
  LeftSvg?: React.FunctionComponent<React.ComponentProps<'svg'>>;
  RightSvg?: React.FunctionComponent<React.ComponentProps<'svg'>>;
  onClickLeft?: () => void;
  onClickRight?: () => void;
  title?: string;
  bgColor?: 'white' | 'gray' | 'transparent';
}

const getBgColor = (bgColor: 'white' | 'gray' | 'transparent') => {
  switch (bgColor) {
    case 'white':
      return 'grayScaleWhite';
    case 'gray':
      return 'grayScaleLG1';
    case 'transparent':
      return undefined;
  }
};

export const Header = (props: HeaderPropType) => {
  const { LeftSvg, onClickLeft, onClickRight, RightSvg, title, bgColor = 'white' } = props;
  const $bgColor = getBgColor(bgColor);
  return (
    <Wrapper $hasTitle={!!title} $bgColor={$bgColor}>
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

const Wrapper = styled.header<{ $hasTitle: boolean; $bgColor: 'grayScaleWhite' | 'grayScaleLG1' | undefined }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;

  width: 100vw;
  height: ${({ $hasTitle }) => ($hasTitle ? '5rem' : '4.4rem')};
  padding: 1rem 2rem;

  background-color: ${({ theme, $bgColor }) => ($bgColor ? theme.colors[$bgColor] : 'transparent')};
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
