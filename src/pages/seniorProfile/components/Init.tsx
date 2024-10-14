import { HeaderLogoIc, SeniorRefreshImgIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import { Header } from '@components/commons/Header';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const Init = ({ setStep }: { setStep: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <>
      <Header LeftSvg={HeaderLogoIc} bgColor="transparent" />
      <InitWrapper>
        <GradEllipse $type={1} />
        <GradEllipse $type={2} />
        <GradEllipse $type={3} />
        <SeniorRefreshImgIcon />
        <Text>좋아요!</Text>
        <Text>이제 후배들이 선배님을 알 수 있도록</Text>
        <Text>
          <HighlightText $isActive>프로필을 등록</HighlightText>
          <HighlightText>해볼까요?</HighlightText>
        </Text>
      </InitWrapper>
      <FullBtn text="다음으로" onClick={() => setStep && setStep((prev) => prev + 1)} isActive={true} />
    </>
  );
};

export default Init;

const InitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100 - 44px);
  padding: 11vh 6.15rem;
`;
const SeniorRefreshImgIcon = styled(SeniorRefreshImgIc)`
  position: absolute;
  top: 30vh;
  left: 14vh;
`;

const Text = styled.p`
  ${theme.fonts.Head1_SB_20};
  z-index: 1;
`;

const HighlightText = styled.span<{ $isActive?: boolean }>`
  z-index: 1;

  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleBG)};
`;

const GradEllipse = styled.div<{ $type: number }>`
  position: absolute;
  top: ${({ $type }) => ($type === 1 ? '19.9rem' : $type === 2 ? '21.7rem' : '36.6rem')};
  left: ${({ $type }) => ($type === 1 ? '-5.6rem' : $type === 2 ? '15.6rem' : '6rem')};
  z-index: 0;

  width: 27.7rem;
  height: 27.9rem;
  border-radius: '50%';

  background: ${({ $type }) => ($type === 1 ? '#F9E1DF' : $type === 2 ? '#E2FAFA' : '#D9F7FF')};

  opacity: 0.8;
  filter: blur(60px);
`;
