import { ModalCheckIc } from '@assets/svgs';
import styled from '@emotion/styled';

const CheckModalContent = () => {
  return (
    <Wrapper>
      <Layout>
        <ModalCheckIc />
        일정 변경은 어려워요
      </Layout>
      <Layout>
        <ModalCheckIc />
        약속 신청 후엔 취소가 불가능해요
      </Layout>
      <Layout>
        <ModalCheckIc />
        신중하게 신청해 주세요
      </Layout>
    </Wrapper>
  );
};

export default CheckModalContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 90%;
  height: 100%;
  padding: 1.3rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Layout = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
