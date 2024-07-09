import styled from '@emotion/styled';
import DropDown from './DropDown';

interface DurationPropType {
  variant?: 'default' | 'secondary';
  isLatter?: boolean;
}

const DurationSelect = ({ variant = 'default', isLatter = false }: DurationPropType) => {
  return (
    <Wrapper $isDefault={variant === 'default'}>
      <DropDown variant={variant} isLatter={isLatter} />
      <WaveText>~</WaveText>
      <DropDown variant={variant} defaultValue="마지막 시간" isLatter={isLatter} />
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
