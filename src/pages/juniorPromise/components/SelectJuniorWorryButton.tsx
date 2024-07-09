import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ButtonCheckIc, ErrorSmallIc } from '../../../assets/svgs';
import { WORRY_SELECTION_BUTTON } from '../constants/constants';

const SelectJuniorWorryButton: React.FC = () => {
  const [selectedButtons, setSelectedButtons] = useState<string[]>([]);

  const handleButtonClick = (title: string) => {
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(title)) {
        return prevSelectedButtons.filter((buttonTitle) => buttonTitle !== title);
      } else {
        return [...prevSelectedButtons, title];
      }
    });
  };

  return (
    <Wrapper>
      {WORRY_SELECTION_BUTTON.map((item) => (
        <Layout
          key={item.id}
          $isActive={selectedButtons.includes(item.title)}
          onClick={() => handleButtonClick(item.title)}>
          <Title2>{item.title}</Title2>
          {selectedButtons.includes(item.title) && <StyledButtonCheckIc />}
        </Layout>
      ))}
      <WarningLayout>
        {selectedButtons.length === 0 && (
          <MinimumOneText>
            <ErrorSmallIc />
            최소 1개 이상 선택해주세요
          </MinimumOneText>
        )}
      </WarningLayout>
    </Wrapper>
  );
};

export default SelectJuniorWorryButton;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const Title2 = styled.span`
  position: relative;
  left: 2rem;

  ${({ theme }) => theme.fonts.Title2_M_16}
  color: ${({ theme }) => theme.colors.grayScaleDG};
`;

const Layout = styled.div<{ $isActive: boolean }>`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  border: 1px solid
    ${({ theme, $isActive }) => ($isActive ? theme.colors.transparentBlue_50 : theme.colors.grayScaleLG2)};
  border-radius: 8px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.transparentBlue_5 : theme.colors.grayScaleWG};

  cursor: pointer;
`;

const WarningLayout = styled.div`
  display: flex;
  position: relative;
  right: 12rem;
`;

const StyledButtonCheckIc = styled(ButtonCheckIc)`
  position: relative;
  right: 1rem;

  width: 2rem;
  height: 2rem;
`;

const MinimumOneText = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.Caption3_M_12}
  color: ${({ theme }) => theme.colors.Red};
`;
