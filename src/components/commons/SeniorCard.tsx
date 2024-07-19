import styled from '@emotion/styled';
import { getLevelName } from '@utils/getLevelName';
interface seniorListPropType {
  nickname: string;
  company: string;
  field: string;
  position: string;
  detailPosition: string;
  level: number;
  variant?: 'default' | 'secondary';
  image: string;
  seniorId: string;
}

interface CompanyProps {
  $randomColor: number;
}

export const SeniorCard = (props: seniorListPropType) => {
  const { nickname, company, field, position, detailPosition, level, variant, image = 'default', seniorId } = props;
  const levelName = getLevelName(level + '');
  const randomColor = Math.floor(Math.random() * 3);
  return (
    <SeniorCardWrapper $isSmall={variant === 'secondary'}>
      <SeniorImg src={image} $isSmall={variant === 'secondary'} />

      <SeniorCardLayout>
        <Nickname>{nickname}</Nickname>
        <SeniorInfo>
          <Company $randomColor={randomColor}>{company}</Company>
          <Field>{field}</Field>
        </SeniorInfo>
        <SeniorJob>
          {position}
          <Divider />
          {detailPosition}
          <Divider />
          {levelName} ({level})
        </SeniorJob>
      </SeniorCardLayout>
    </SeniorCardWrapper>
  );
};

export default SeniorCard;

const SeniorCardWrapper = styled.div<{ $isSmall: boolean }>`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${({ $isSmall }) => ($isSmall ? '12.6rem' : '14.2rem')};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.grayScaleWhite};
`;
const SeniorImg = styled.img<{ $isSmall: boolean }>`
  width: ${({ $isSmall }) => ($isSmall ? '8.8rem' : '11.4rem')};
  height: ${({ $isSmall }) => ($isSmall ? '8.8rem' : '11.4rem')};
  border-radius: 112.82px;

  background: ${({ theme }) => theme.colors.Blue};
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

const Company = styled.p<CompanyProps>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  height: 2.5rem;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  background: ${({ $randomColor, theme }) => {
    switch ($randomColor) {
      case 0:
        return theme.colors.chipBlueBg;
      case 1:
        return theme.colors.chipGreenBg;
      case 2:
        return theme.colors.chipPurpleBg;
      default:
        return theme.colors.chipBlueBg;
    }
  }};

  color: ${({ $randomColor, theme }) => {
    switch ($randomColor) {
      case 0:
        return theme.colors.chipBlueText;
      case 1:
        return theme.colors.chipGreenText;
      case 2:
        return theme.colors.chipPurpleText;
      default:
        return theme.colors.chipBlueText;
    }
  }};
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
  flex-wrap: wrap;
  gap: 0.2rem;
  word-break: break-all;

  align-items: center;

  width: 22rem;
  margin-top: 0.3rem;

  ${({ theme }) => theme.fonts.Body1_M_14}
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Divider = styled.div`
  width: 0.1rem;
  height: 1.4rem;
  margin: 0 0.5rem;

  background: ${({ theme }) => theme.colors.grayScaleLG2};
`;
