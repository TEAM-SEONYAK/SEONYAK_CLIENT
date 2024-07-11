import styled from '@emotion/styled';
import GoogleIc from '../../../../assets/svgs/googleLogo.svg?react';
import theme from '../../../../styles/theme';
import useGoogleLoginHook from '../hooks/useLoginQuery';

const GoogleLogin = () => {
  const { login } = useGoogleLoginHook();

  return (
    <Wrapper onClick={() => login()}>
      <GoogleIcon />
      <Text>구글로 시작하기</Text>
    </Wrapper>
  );
};

export default GoogleLogin;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 33.5rem;
  height: 5.6rem;
  border-radius: 5px;

  background-color: ${theme.colors.grayScaleBG};

  color: white;

  cursor: pointer;
`;

const GoogleIcon = styled(GoogleIc)`
  width: 3.3rem;
  height: 3.3rem;
  margin: 1rem;
`;

const Text = styled.span`
  display: flex;

  padding-left: 5.85rem;

  ${theme.fonts.Head2_SB_18};
  text-align: center;
`;
