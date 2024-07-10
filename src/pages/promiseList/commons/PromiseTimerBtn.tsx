import styled from '@emotion/styled';

interface PromiseTimerBtnPropType {
  isActive: boolean;
  diff: string;
}

const PromiseTimerBtn = (props: PromiseTimerBtnPropType) => {
  const { isActive, diff } = props;
  return <Wrapper disabled={!isActive}>{isActive ? '지금 입장하기' : `약속 시간까지 ${diff}`}</Wrapper>;
};

export default PromiseTimerBtn;

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 31.1rem;
  margin-top: 1rem;
  padding: 0.6rem 0 0.5rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  color: ${({ theme }) => theme.colors.grayScaleWhite};

  ${({ theme }) => theme.fonts.Title1_SB_16};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;
