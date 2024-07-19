import { CheckItemIc } from '@assets/svgs';
import { FullBtn } from '@components/commons/FullButton';
import styled from '@emotion/styled';
import { 계열_LIST } from '@pages/onboarding/constants';
import { JoinContextType } from '@pages/onboarding/type';
import { useState } from 'react';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';

const Step계열선택 = () => {
  const { setData } = useOutletContext<JoinContextType>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [selectedField, setSelectedField] = useState('');
  const handleClickLink = () => {
    setData((prev) => ({
      ...prev,
      field: selectedField,
    }));
    navigate(pathname.includes('senior') ? '/seniorOnboarding/5' : '/juniorOnboarding/7');
  };

  return (
    <>
      <Wrapper>
        {계열_LIST.map((el) => (
          <ItemWrapper key={el} onClick={() => setSelectedField(el)}>
            <Text>{el}</Text>
            <CheckItemIcon isactive={(selectedField === el) + ''} />
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

const CheckItemIcon = styled(CheckItemIc)<{ isactive: string }>`
  fill: ${({ theme, isactive }) => (isactive === 'true' ? theme.colors.Blue : theme.colors.grayScaleLG2)};
`;
