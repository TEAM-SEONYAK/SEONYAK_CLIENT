import styled from '@emotion/styled';
// 화면 하단 풀사이즈 버튼
interface FullBtnPropType {
  isActive?: boolean;
  text?: string;
  onClick: () => void;
  onInactiveClick?: () => void;
  isTransparent?: boolean;
}

export const FullBtn = (props: FullBtnPropType) => {
  const { isActive = true, text = '다음으로', onClick, onInactiveClick, isTransparent = false } = props;
  return (
    <Wrapper $isTransparent={isTransparent}>
      <FullBtnContainer type="button" $isActive={isActive} onClick={isActive ? onClick : onInactiveClick}>
        {text}
      </FullBtnContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isTransparent: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9;

  width: 100%;
  padding: 0 2rem 3.8rem;

  background-color: ${({ $isTransparent }) => ($isTransparent ? '' : 'white')};
`;

const FullBtnContainer = styled.button<{ $isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1.55rem 0;
  border-radius: 5px;

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleMG2)};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};

  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'default')};
`;
