import { AwardMedalIc, CareerFlagIc } from '@assets/svgs';
import styled from '@emotion/styled';

const ImgTextBox = ({ variant = 'career', text }: { variant?: 'career' | 'award'; text: string }) => {
  return (
    <Wrapper>
      {variant === 'career' ? <CareerFlagIcon /> : <AwardMedalIcon />}
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ImgTextBox;

const Wrapper = styled.div`
  display: flex;
  gap: 1.8rem;

  width: 100%;
  margin-top: 1rem;
  padding: 1.1rem 1.2rem;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleWG};
`;

const CareerFlagIcon = styled(CareerFlagIc)`
  width: 5.5rem;
  height: 7rem;
`;
const AwardMedalIcon = styled(AwardMedalIc)`
  width: 5.5rem;
  height: 7rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body1_M_14};
  white-space: wrap;

  width: 23.8rem;
`;
