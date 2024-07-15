import styled from '@emotion/styled';

// 화면 하단 풀사이즈 버튼
interface FullBtnPropType {
  isActive?: boolean;
  text?: string;
  onClick?: () => void;
}

export const FullBtn = (props: FullBtnPropType) => {
  const { isActive, text = '다음으로', onClick } = props;
  return (
    <Wrapper>
      <FullBtnWrapper type="button" disabled={!isActive} onClick={onClick}>
        {text}
      </FullBtnWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  padding: 3.6rem 2rem;
`;
const FullBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.55rem 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;
