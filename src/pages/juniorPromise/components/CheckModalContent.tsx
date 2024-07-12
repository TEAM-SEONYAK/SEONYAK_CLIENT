import { ModalCheckIc } from '@assets/svgs';
import styled from '@emotion/styled';

const CheckModalContent = () => {
  return (
    <Wrapper>
      <ModalCheckIcon />
      일정 변경은 어려워요 <br />
      <ModalCheckIcon />
      약속 신청 후엔 취소가 불가능해요
      <br />
      <ModalCheckIcon />
      신중하게 신청해 주세요
    </Wrapper>
  );
};

export default CheckModalContent;

const Wrapper = styled.div`
  gap: 0.5rem;

  width: 90%;
  height: 100%;
  padding: 1.3rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const ModalCheckIcon = styled(ModalCheckIc)`
  margin-right: 0.5rem;
`;
