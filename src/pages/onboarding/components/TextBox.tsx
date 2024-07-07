import styled from '@emotion/styled';
import { ReactNode } from 'react';

export const InputBox = ({ placeholder }: { placeholder: string }) => {
  return <Input type="text" placeholder={placeholder} />;
};

export const Caption = ({ children }: { children: string }) => {
  return <CaptionText>{children}</CaptionText>;
};
interface TextBoxProps {
  label: string;
  children: ReactNode;
}

export const TextBox = ({ label, children }: TextBoxProps) => {
  return (
    <Wrapper>
      <LabelText>{label}</LabelText>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const LabelText = styled.label`
  ${({ theme }) => theme.fonts.Title1_SB_16};
  color: ${({ theme }) => theme.colors.grayScaleBG};
`;

const Input = styled.input`
  height: 5.1rem;
  margin-top: 0.4rem;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleBG};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const CaptionText = styled.p`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
