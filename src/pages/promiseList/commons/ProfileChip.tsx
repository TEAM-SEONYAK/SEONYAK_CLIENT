import styled from '@emotion/styled';

interface RecentChipPropType {
  type: string;
  content: string;
}

const ProfileChip = (props: RecentChipPropType) => {
  const { type, content } = props;
  return <Wrapper $type={type}>{content}</Wrapper>;
};

export default ProfileChip;

const Wrapper = styled.div<{ $type: string }>`
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
  background-color: ${({ theme, $type }) => {
    switch ($type) {
      case 'promiseNum':
        return theme.colors.grayScaleBG;
      case 'dDay':
        return theme.colors.transparentRed_15;
      case 'field':
        return theme.colors.grayScaleLG1;
      case 'company':
        return theme.colors.chipBlueBg;
      case 'userGuide':
        return theme.colors.grayScaleWhite;
      default:
        return theme.colors.grayScaleLG1;
    }
  }};

  color: ${({ theme, $type }) => {
    switch ($type) {
      case 'promiseNum':
        return theme.colors.grayScaleWhite;
      case 'dDay':
        return theme.colors.Red;
      case 'field':
        return theme.colors.grayScaleDG;
      case 'company':
        return theme.colors.chipBlueText;
      case 'userGuide':
        return theme.colors.grayScaleMG1;
      default:
        return theme.colors.grayScaleDG;
    }
  }};
`;
