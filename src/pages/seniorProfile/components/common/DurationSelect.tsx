import React, { useState } from 'react';
import DropDown from './DropDown';
import styled from '@emotion/styled';

interface DurationPropType {
  variant?: 'default' | 'secondary';
}

const DurationSelect = ({ variant = 'default' }: DurationPropType) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Wrapper $isDefault={variant === 'default'}>
      <DropDown variant={variant} />
      <WaveText>~</WaveText>
      <DropDown variant={variant} defaultValue="마지막 시간" />
    </Wrapper>
  );
};

export default DurationSelect;

const Wrapper = styled.div<{ $isDefault: boolean }>`
  display: flex;
  gap: ${({ $isDefault }) => ($isDefault ? '0.9rem' : '0.7rem')};
  align-items: center;
`;

const WaveText = styled.p`
  ${({ theme }) => theme.fonts.Title2_M_16};
`;
