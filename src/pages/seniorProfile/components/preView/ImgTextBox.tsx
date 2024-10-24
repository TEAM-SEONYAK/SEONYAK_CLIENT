import img_flag from '@assets/images/img_flag.png';
import img_medal from '@assets/images/img_medal.png';
import styled from '@emotion/styled';

const ImgTextBox = ({ variant = 'career', text }: { variant?: 'career' | 'award'; text: string }) => {
  return (
    <Wrapper>
      <CareerMedalImg src={variant === 'career' ? img_flag : img_medal} />
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

const CareerMedalImg = styled.img`
  width: 5.5rem;
  height: 7rem;
`;

const Text = styled.p`
  width: 23.8rem;

  white-space: wrap;

  ${({ theme }) => theme.fonts.Body1_M_14};
`;
