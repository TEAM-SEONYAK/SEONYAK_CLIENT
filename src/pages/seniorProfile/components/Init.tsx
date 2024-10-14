import { HeaderLogoIc, RefreshImgIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const Init = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <>
      <Header LeftSvg={HeaderLogoIc} bgColor="transparent" />
      {/* <RefreshImgIc /> */}
      <Text>좋아요! 이제 후배들이 선배님을 알 수 있도록</Text>
      <FullBtn text="다음으로" onClick={() => setStep && setStep((prev) => prev + 1)} isActive={true} />
    </>
  );
};

export default Init;

const Text = styled.p`
  ${theme.fonts.Body1_M_14};
`;
