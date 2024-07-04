import styled from '@emotion/styled';

const ProgressBar = () => {
  const maxProgress = 4;
  const progress = 1;

  return (
    <ProgressBarWrapper>
      <Progress $width={(progress * 100) / maxProgress} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;

const ProgressBarWrapper = styled.div`
  overflow: hidden;

  width: 100vw;
  height: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Progress = styled.div<{ $width: number }>`
  width: ${({ $width }) => `${$width}%`};
  height: 0.8rem;
  padding: 0;
  border-radius: 0 2px;

  background-color: ${({ theme }) => theme.colors.primaryBlue300};
`;
