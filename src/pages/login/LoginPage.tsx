import { GoogleLogoIc } from '@assets/svgs';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import useGoogleLoginHook from './hooks/useLoginQuery';

const LoginPage = () => {
  const { login } = useGoogleLoginHook();

  return (
    <Wrapper onClick={() => login()}>
      <GoogleLogoIcon />
      <Text>구글로 시작하기</Text>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 33.5rem;
  height: 5.6rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  color: white;

  cursor: pointer;
`;

const Text = styled.span`
  display: flex;

  padding-left: 5.85rem;

  ${theme.fonts.Head2_SB_18};
  text-align: center;
`;

const GoogleLogoIcon = styled(GoogleLogoIc)`
  width: 33px;
  height: 33px;
  margin: 10px;
`;
