import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import img_waring from '@assets/images/img_warning.png';
import { FullBtn } from '@components/commons/FullButton';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleHomeButton = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <Wrapper>
      <WarningImg src={img_waring} />
      <Meta>오류가 발생했어요</Meta>
      <Description>궁금한 사항이 해결되지 않으셨나요?</Description>
      <LinkLayout>
        <Link>고객센터</Link>
        <Link>자주 묻는 질문</Link>
      </LinkLayout>
      <FullBtn text="홈으로" onClick={() => handleHomeButton()} />
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
  margin-top: 2.4rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};

  ${({ theme }) => theme.fonts.Head1_B_20};
`;

const Description = styled.p`
  margin-top: 0.8rem;

  color: ${({ theme }) => theme.colors.grayScaleMG1};
  text-align: center;
  white-space: nowrap;

  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const LinkLayout = styled.div`
  display: flex;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
`;

const Link = styled.p`
  margin-top: 1.6rem;

  color: ${({ theme }) => theme.colors.grayScaleMG1};
  text-align: center;
  text-decoration: underline;

  text-underline-offset: 0.2rem;

  ${({ theme }) => theme.fonts.Title1_SB_16};
`;
