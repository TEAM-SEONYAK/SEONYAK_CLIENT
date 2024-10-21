import styled from '@emotion/styled';
import { useState } from 'react';
import { generateRandomBgColor, generateRandomColor } from '../utils/generateChipColor';

interface RecentChipPropType {
  type: string;
  content: string | undefined;
  onClick?: () => void;
}

const ProfileChip = (props: RecentChipPropType) => {
  const { type, content, onClick } = props;
  const [randomNum] = useState(Math.floor(Math.random() * 3));

  const randomBgColor = generateRandomBgColor(randomNum);
  const randomColor = generateRandomColor(randomNum);
  return (
    <Wrapper $type={type} $randomBgColor={randomBgColor} $randomColor={randomColor} onClick={onClick}>
      {content}
    </Wrapper>
  );
};

export default ProfileChip;

const Wrapper = styled.div<{ $type: string; $randomColor: string; $randomBgColor: string }>`
  padding: 0.3rem 0.5rem;
  border: ${({ theme, $type }) => {
    switch ($type) {
      case 'dDay':
        return `1px solid ${theme.colors.transparentRed_40}`;
      case 'userGuide':
        return `1px solid ${theme.colors.grayScaleLG2}`;
      default:
        return `1px solid transparent`;
    }
  }};
  border-radius: 6px;

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  background-color: ${({ theme, $type, $randomBgColor }) => {
    switch ($type) {
      case 'promiseNum':
        return theme.colors.grayScaleBG;
      case 'dDay':
        return theme.colors.transparentRed_15;
      case 'field':
        return theme.colors.grayScaleLG1;
      case 'company':
        return theme.colors[$randomBgColor as keyof typeof theme.colors];
      case 'userGuide':
        return theme.colors.grayScaleWhite;
      default:
        return theme.colors.grayScaleLG1;
    }
  }};

  color: ${({ theme, $type, $randomColor }) => {
    switch ($type) {
      case 'promiseNum':
        return theme.colors.grayScaleWhite;
      case 'dDay':
        return theme.colors.Red;
      case 'field':
        return theme.colors.grayScaleDG;
      case 'company':
        return theme.colors[$randomColor as keyof typeof theme.colors];
      case 'userGuide':
        return theme.colors.grayScaleMG1;
      default:
        return theme.colors.grayScaleDG;
    }
  }};
`;
