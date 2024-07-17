import { CheckItemIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { 계열_LIST } from '@pages/onboarding/constants';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step계열선택 = () => {
  const ROLE = 'SENIOR'; // 임시
  const navigate = useNavigate();
  const handleClickLink = () => {
    navigate(ROLE === 'SENIOR' ? '/seniorOnboarding/5' : '/juniorOnboarding/7');
  };

  const [selectedField, setSelectedField] = useState('');
  return (
    <>
      <Wrapper>
        {계열_LIST.map((el) => (
          <ItemWrapper key={el} onClick={() => setSelectedField(el)}>
            <Text>{el}</Text>
            <CheckItemIcon isactive={selectedField === el} />
          </ItemWrapper>
        ))}
      </Wrapper>
      <FullBtn isActive={selectedField !== ''} onClick={handleClickLink} />
    </>
  );
};

export default Step계열선택;

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding-top: 2rem;
`;

const ItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 4.8rem;
  padding: 1rem 0;
`;

const Text = styled.p`
  display: flex;
  gap: 1rem;
  align-items: center;

  color: ${({ theme }) => theme.colors.grayScaleDG};
  ${({ theme }) => theme.fonts.Title1_SB_16};
`;

const CheckItemIcon = styled(CheckItemIc)<{ isactive: boolean }>`
  fill: ${({ theme, isactive }) => (isactive ? theme.colors.Blue : theme.colors.grayScaleLG2)};
`;
