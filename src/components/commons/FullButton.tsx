import styled from '@emotion/styled';

// 화면 하단 풀사이즈 버튼
interface FullBtnPropType {
  isActive?: boolean;
  text: string;
  onClick: () => void;
}

export const FullBtn = (props: FullBtnPropType) => {
  const { isActive, text, onClick } = props;
  return (
    <FullBtnWrapper type="button" disabled={!isActive} onClick={onClick}>
      {text}
    </FullBtnWrapper>
  );
};

const FullBtnWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 3.8rem;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);

  width: 33.5rem;
  height: 4.5rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  ${({ theme }) => theme.fonts.Head2_SB_18}
  color: ${({ theme }) => theme.colors.grayScaleWhite};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grayScaleMG2};

    cursor: default;
  }
`;
