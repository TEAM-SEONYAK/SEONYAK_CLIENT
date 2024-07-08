import styled from '@emotion/styled';

interface ISeniorList {
  nickname: string;
  company: string;
  field: string;
  position: string;
  level: number;
}
export const SeniorCard = ({ nickname, company, field, position, level }: ISeniorList) => {
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
            <Job>디자인</Job>
            <Divider />
            <Position>{position}</Position>
          </SeniorJob>
          <Level>주니어 ({level}년차)</Level>
        </SeniorCardLayout>
      </SeniorCardWrapper>
    </>
  );
};

export default SeniorCard;

const SeniorCardWrapper = styled.div`
  display: flex;

  width: 33.5rem;
  height: 14.2rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const SeniorImg = styled.div`
  width: 7.8rem;
  height: 9.8rem;
  margin: 2.2rem 2rem;

  background: blue;
`;

const SeniorCardLayout = styled.div`
  margin: 1.9rem 2.5rem 1.8rem 0;
`;

const Nickname = styled.span`
  color: ${({ theme }) => theme.colors.grayScaleBG};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const SeniorInfo = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  align-self: stretch;

  margin-top: 0.8rem;
`;

const Company = styled.p`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  width: 11.4rem;
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

  width: 19.2rem;
  height: 2.2rem;
  margin-top: 0.5rem;
`;

const Job = styled.p`
  width: 3.6rem;

  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Body1_M_14};
`;

const Divider = styled.div`
  width: 0.1rem;
  height: 1.4rem;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;

const Position = styled.p`
  width: 13.6rem;

  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Level = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;
