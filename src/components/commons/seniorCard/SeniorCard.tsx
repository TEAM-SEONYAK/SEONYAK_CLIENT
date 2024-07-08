import styled from '@emotion/styled';
import { checkLevel } from './utils/checkLevel';

interface ISeniorList {
  nickname: string;
  company: string;
  field: string;
  position: string;
  detailPosition: string;
  level: number;
}
export const SeniorCard = ({ nickname, company, field, position, detailPosition, level }: ISeniorList) => {
  const levelName = checkLevel(level);

  return (
    <>
      <SeniorCardWrapper>
        <SeniorImg />
        <SeniorCardLayout>
          <Nickname>{nickname}</Nickname>
          <SeniorInfo>
            <Company>{company}</Company>
            <Field>{field}</Field>
          </SeniorInfo>
          <SeniorJob>
            <Position>{position}</Position>
            <Divider />
            <DetailPosition>{detailPosition}</DetailPosition>
          </SeniorJob>
          <Level>
            {levelName} / ({level}년차)
          </Level>
        </SeniorCardLayout>
      </SeniorCardWrapper>
    </>
  );
};

export default SeniorCard;

const SeniorCardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  width: 100%;
  height: 14.2rem;
  padding: 1.9rem 2.5rem 1.8rem 2rem;
  border-radius: 8px;

  background-color: pink;

  /* background: ${({ theme }) => theme.colors.grayScaleWhite}; */
`;

const SeniorImg = styled.div`
  width: 7.8rem;
  height: 9.8rem;
  border-radius: 6.88px;

  background: blue;
`;

const SeniorCardLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const SeniorInfo = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  margin-top: 0.8rem;
`;

const Company = styled.p`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  height: 2.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.chipBlueBg};

  color: ${({ theme }) => theme.colors.chipBlueText};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;

const Field = styled.p`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Caption2_SB_12};
`;

const SeniorJob = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  margin-top: 0.5rem;
`;

const DetailPosition = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const Divider = styled.div`
  width: 0.1rem;
  height: 1.4rem;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Position = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14}
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Level = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;
