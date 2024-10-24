import styled from '@emotion/styled';
import { getRole } from '@utils/storage';
import { useNavigate } from 'react-router-dom';
import img_waring from '@assets/images/img_warning.png';

const ErrorPage = () => {
  const navigate = useNavigate();
  const role = getRole();
  const navPath = role === 'SENIOR' ? '/promiseList' : '/juniorPromise';
  return (
    <Wrapper>
      <WarningImg src={img_waring} />
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

  width: 100%;
  height: 100dvh;
  padding: 16.7rem 9.8rem 23.7rem 9.9rem;
`;

const WarningImg = styled.img`
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
