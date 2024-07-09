import styled from '@emotion/styled';

interface RecentChipPropType {
  content: string;
}

const RecentChip = (props: RecentChipPropType) => {
  const { content } = props;
  return <Wrapper>{content}</Wrapper>;
};

export default RecentChip;

const Wrapper = styled.div`
  padding: 0.4rem 0.6rem;

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
`;
