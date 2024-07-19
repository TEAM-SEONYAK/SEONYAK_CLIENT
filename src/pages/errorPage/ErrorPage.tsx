import { WarningImg } from '@assets/svgs';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const navPath = role === 'SENIOR' ? '/' : '/juniorPromise';
  return (
    <Wrapper>
      <WarningImgIcon />
      <Meta>오류가 발생했어요</Meta>
      <Description onClick={() => navigate(navPath)}>홈으로</Description>
    </Wrapper>
  );
};

export default ErrorPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 16.7rem 9.8rem 23.7rem 9.9rem;
`;

const WarningImgIcon = styled(WarningImg)`
  width: 12.8rem;
  height: 14rem;
`;

const Meta = styled.p`
  margin-top: 3rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};

  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const Description = styled.p`
  margin-top: 0.7rem;

  color: ${({ theme }) => theme.colors.grayScaleMG1};
  text-align: center;
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  ${({ theme }) => theme.fonts.Title2_R_16};
`;
