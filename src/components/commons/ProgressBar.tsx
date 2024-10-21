import styled from '@emotion/styled';

interface ProgressBarPropType {
  max: number;
  current: number;
}

const ProgressBar = (props: ProgressBarPropType) => {
  const { max, current } = props;

  return (
    <ProgressBarWrapper>
      <Progress $width={(current * 100) / max} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  overflow: hidden;
  position: fixed;
  top: 5rem;

  width: 100vw;
  max-width: 43rem;
  height: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Progress = styled.div<{ $width: number }>`
  width: ${({ $width }) => `${$width}%`};
  height: 0.8rem;
  padding: 0;
  border-radius: 0 2px 2px 0;

  background-color: ${({ theme }) => theme.colors.primaryBlue300};
`;
