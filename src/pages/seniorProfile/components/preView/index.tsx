import SeniorCard from '@components/commons/seniorCard/SeniorCard';
import styled from '@emotion/styled';
import ImgTextBox from '@pages/seniorProfile/components/preView/ImgTextBox';
import ProfileSummary from '@pages/seniorProfile/components/preView/ProfileSummary';
import TimeTable from '@pages/seniorProfile/components/preView/TimeTable';
import { dayOfWeekTimeList, profilePropType } from '@pages/seniorProfile/types';

const dummy = {
  nickname: '도리야끼다요',
  company: '비바리퍼블리카 (토스)',
  field: '예체능 계열',
  position: '디자인',
  detailPosition: '프로덕트그래픽 디자이너',
  level: '1',
  catchphrase: '단 하나의 뭔가를 해주는 김도현입니다. 저만 믿으세요.',
  career: '초기 스타트업에서 시리즈B 유치까지 프로덕트 디벨롭, IT 동아리 통한 다수의 프로젝트 경험',
  award: 'IF 디자인 어워드, Red dot 디자인 어워드 등 다수의 해외 공모전 수상 경험 보유',
  story:
    '저는 기술적 전문성과 혁신적인 아이디어로 고객의 니즈를 해결하는 개발자입니다. 오랜 기간 쌓아온 경험과 노하우를 바탕으로 고객님의 요구사항을 신속하고 정확하게 파악하여 최적의 솔루션을 제공해 드리겠습니다. 마치 제가 직접 운영하는 가게처럼 열정을 다해 고객 맞춤형 서비스를 설계하겠습니다.하하하하하',
  dayOfWeek: {
    월: [
      {
        startTime: '09:00',
        endTime: '12:00',
      },
      {
        startTime: '15:00',
        endTime: '18:00',
      },
    ],
    화: [
      {
        startTime: '00:00',
        endTime: '00:00',
      },
    ],
    수: [
      {
        startTime: '09:00',
        endTime: '12:00',
      },
      {
        startTime: '15:00',
        endTime: '18:00',
      },
    ],
    목: [
      {
        startTime: '06:00',
        endTime: '18:00',
      },
    ],
    금: [
      {
        startTime: '00:00',
        endTime: '00:00',
      },
    ],
    토: [
      {
        startTime: '09:00',
        endTime: '12:00',
      },
      {
        startTime: '15:00',
        endTime: '18:00',
      },
    ],
    일: [
      {
        startTime: '00:00',
        endTime: '00:00',
      },
    ],
  },
};

const PreView = ({ profile }: profilePropType) => {
  return (
    <Wrapper>
      <SeniorCard
        nickname={dummy.nickname}
        company={dummy.company}
        field={dummy.field}
        position={dummy.position}
        detailPosition={dummy.detailPosition}
        level={dummy.level}
        variant="medium"
      />
      <ProfileSummary description1="미제공" description2={1} description3="미제공" />
      <Meta>선배의 이력 · 수상</Meta>
      <ImgTextBox text={dummy.career} />
      <ImgTextBox text={dummy.award} />
      <Meta2>{dummy.catchphrase}</Meta2>
      <Description>{dummy.story}</Description>
      <Meta2>선배의 타임 테이블</Meta2>
      <TimeTable preferredTime={dummy.dayOfWeek as dayOfWeekTimeList} />
    </Wrapper>
  );
};

export default PreView;

const Wrapper = styled.div`
  padding: 0rem 2rem 12.6rem;

  overflow-y: scroll;
`;

const Meta = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  padding-top: 3rem;
`;

const Meta2 = styled.p`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  padding: 3.6rem 0 1.2rem;
  width: 19.9rem;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
`;
