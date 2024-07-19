import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinButton = () => {
  const navigate = useNavigate();
  const handleSeniorClick = () => {
    navigate('/signup', { state: { role: 'SENIOR' } });
  };

  const handleJuniorClick = () => {
    navigate('/signup', { state: { role: 'JUNIOR' } });
  };

  return (
    <Wrapper>
      <Button onClick={handleSeniorClick}>선배로 시작하기</Button>
      <Button onClick={handleJuniorClick}>후배로 시작하기</Button>
    </Wrapper>
  );
};

export default JoinButton;

const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  z-index: 1;
`;

const Button = ({ children, onClick }: { children: ReactNode; onClick: () => void }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <Text>{children}</Text>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  align-items: center;

  padding: 1.55rem 2.4rem;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.Blue};

  cursor: pointer;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grayScaleWhite};
  ${({ theme }) => theme.fonts.Head2_SB_18};
`;
