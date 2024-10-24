import styled from '@emotion/styled';
import { Header } from '@components/commons/Header';
import { HeaderLogoIc, AlarmIc } from '@assets/svgs';
import img_hbhome_main from '@assets/images/img_hbhome_main.png';
interface BannerPropTypes {
  // 오류시 '후배'
  myNickname: string | undefined;
}

export const Banner = ({ myNickname }: BannerPropTypes) => {
  return (
    <>
      <Header LeftSvg={HeaderLogoIc} RightSvg={AlarmIc} bgColor="transparent" />
      <Background>
        <HbHomeMainImg src={img_hbhome_main} />
      </Background>
      <Title>반가워요 {myNickname ? myNickname : '후배'}님,고민을 해결해볼까요?</Title>
    </>
  );
};

const Title = styled.p`
  position: absolute;
  top: 6rem;
  left: 2rem;

  width: 16.8rem;
  height: 5.6rem;

  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Head1_SB_20}
  word-break: keep-all;
`;

const Background = styled.div`
  position: relative;

  width: 100vw;
  height: 18.7rem;

  background: linear-gradient(151deg, #cce7ff 17.85%, #b8b1ff 163.57%);
`;

const HbHomeMainImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
