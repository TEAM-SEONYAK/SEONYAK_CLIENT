import { ArrowLeftIc, ButtonCheckIc } from '@assets/svgs';
import { Header } from '@components/commons/Header';
import { AutoCloseModal } from '@components/commons/modal/AutoCloseModal';
import styled from '@emotion/styled';
import { useState } from 'react';
import { SENIOR_RESPONSE, JUNIOR_RESPONSE } from './constants/constant';
import { formatDate } from './utils/formatDate';

const PromiseDetail = () => {
  // location으로 닉네임 잡아오기
  const myNickname = '아가라고요';
  const userRole = 'SENIOR';
  const [selectTime, setSelectTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickTimeBox = (idx: number) => {
    setSelectTime(idx);
  };

  const handleModalOpen = (type: boolean) => {
    setIsModalOpen(type);
  };

  return (
    <>
      <Header LeftSvg={ArrowLeftIc} title="자세히 보기" />
      <Wrapper>
        <Layout>
          <TitleContainer>
            <Title>
              {SENIOR_RESPONSE.juniorInfo.nickname} {userRole === 'SENIOR' ? '후배' : '선배'}님의 정보
            </Title>
            <Content>
              {SENIOR_RESPONSE.juniorInfo.univName} {SENIOR_RESPONSE.juniorInfo.field}{' '}
              {SENIOR_RESPONSE.juniorInfo.department}
            </Content>
          </TitleContainer>

          <TitleContainer>
            <Title>{myNickname} 선배님과 상담하고 싶은 내용</Title>
            <ContentContainer>
              {SENIOR_RESPONSE.topic.length ? (
                SENIOR_RESPONSE.topic.map((el, idx) => <Content key={idx + el}>{el}</Content>)
              ) : (
                <WrittenContent>{SENIOR_RESPONSE.personalTopic}</WrittenContent>
              )}
            </ContentContainer>
          </TitleContainer>

          <TimeContainer>
            <Title>희망하는 약속 시간</Title>
            <Description>세 가지 시간 중 하나를 필수로 선택해주세요</Description>
            <ContentContainer>
              {SENIOR_RESPONSE.timeList.map((el, idx) => (
                <Time
                  key={el.date + idx + el.startTime}
                  onClick={() => handleClickTimeBox(idx)}
                  $isActive={selectTime === idx}>
                  {formatDate(el.date)} {el.startTime} - {el.endTime}
                  <ButtonCheckIcon isactive={(selectTime === idx).toString()} />
                </Time>
              ))}
            </ContentContainer>
          </TimeContainer>
        </Layout>
        <BtnWrapper>
          <DeclineBtn type="button">거절하기</DeclineBtn>
          <AcceptBtn
            type="button"
            disabled={selectTime === null}
            $isActive={selectTime !== null}
            onClick={() => setIsModalOpen(true)}>
            수락하기
          </AcceptBtn>
        </BtnWrapper>
        <BtnBackground />
      </Wrapper>
      <AutoCloseModal text="선약이 거절되었어요" showModal={isModalOpen} handleShowModal={handleModalOpen}>
        <DeclineImg />
      </AutoCloseModal>
    </>
  );
};

export default PromiseDetail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.765rem 0 2.035rem;

  width: 100vw;
  height: 100%;
  margin-top: 4.4rem;

  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  border-top: 1px solid ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  margin-bottom: 11.6rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Content = styled.div`
  width: 100%;
  padding: 1.1rem 0 1.1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14}
`;

const Time = styled.div<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleLG1};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleBG)};
  ${({ theme }) => theme.fonts.Body1_M_14};
  cursor: pointer;

  border: ${({ $isActive, theme }) =>
    $isActive ? `1px solid ${theme.colors.transparentBlue_50}` : '1px solid transparent'};
`;

const ButtonCheckIcon = styled(ButtonCheckIc)<{ isactive: string }>`
  display: ${({ isactive }) => (isactive === 'true' ? 'flex' : 'none')};
`;

const WrittenContent = styled.div`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayScaleLG1};
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.span`
  margin: 0.4rem 0 1rem 0;
  color: ${({ theme }) => theme.colors.grayScaleMG2};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const BtnWrapper = styled.div`
  position: fixed;
  z-index: 3;
  bottom: 0;
  width: 100%;
  padding: 0 2.035rem 0 1.965rem;
  display: flex;
  gap: 1rem;
  margin-bottom: 3.977rem;
`;

const DeclineBtn = styled.button`
  border-radius: 5px;
  width: 10.6rem;
  height: 5.6rem;
  background-color: ${({ theme }) => theme.colors.grayScaleBG};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Head2_SB_18}
  cursor: pointer;
`;

const AcceptBtn = styled.button<{ $isActive: boolean }>`
  border-radius: 5px;
  width: 21.9rem;
  height: 5.6rem;
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.Blue : theme.colors.grayScaleMG2)};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  cursor: ${({ $isActive }) => ($isActive ? 'pointer' : 'default')};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;

const BtnBackground = styled.div`
  width: 100%;
  height: 6.1rem;
  background-color: ${({ theme }) => theme.colors.grayScaleWhite};
  z-index: 2;
  position: fixed;
  bottom: 0;
`;

const DeclineImg = styled.div`
  width: 27rem;
  height: 17.1rem;
  background-color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
