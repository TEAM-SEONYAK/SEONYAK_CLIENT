import styled from '@emotion/styled';
import { Header } from '@components/commons/Header';
import { HeaderLogoIc, AlarmIc } from '@assets/svgs';
import img_hbhome_main from '@assets/images/img_hbhome_main.png';
import { useState } from 'react';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import img_modal_accept from '@assets/images/img_modal_accept.png';

interface BannerPropTypes {
  myNickname: string | undefined;
}

export const Banner = ({ myNickname }: BannerPropTypes) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header LeftSvg={HeaderLogoIc} RightSvg={AlarmIc} onClickRight={() => setShowModal(true)} bgColor="transparent" />
      <Background>
        <HbHomeMainImg src={img_hbhome_main} />
      </Background>
      <Title>반가워요 {myNickname ? myNickname : '후배'}님,고민을 해결해볼까요?</Title>
      <AutoCloseModal
        text="알림은 문자를 확인해주세요 !"
        showModal={showModal}
        handleShowModal={(show: boolean) => setShowModal(show)}>
        <ModalImg src={img_modal_accept} />
      </AutoCloseModal>
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

const ModalImg = styled.img`
  width: 27rem;
  height: 17.2rem;
`;
