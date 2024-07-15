import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface InnerButtonProps {
  text: string;
  onClick?: () => void;
}

export const InnerButton = ({ text, onClick }: InnerButtonProps) => {
  return (
    <Button type="button" onClick={onClick}>
      {text}
    </Button>
  );
};

export const InputBox = ({
  label,
  placeholder,
  value,
  children,
  type = 'text',
}: {
  label: string;
  placeholder: string;
  value?: string;
  type?: 'text' | 'file';
  children?: ReactNode;
}) => {
  return (
    <InputWrapper>
      {type === 'text' ? (
        <Input type={type} id={label} placeholder={placeholder} value={value} />
      ) : (
        <>
          <FileLabel>
            파일 첨부하기
            <FileInput type="file" accept="image/*, .pdf" />
          </FileLabel>
        </>
      )}
      {children}
    </InputWrapper>
  );
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
      <LabelText htmlFor={label}>{label}</LabelText>
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

const InputWrapper = styled.div`
  position: relative;
`;
const Input = styled.input`
  width: 100%;
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

const Button = styled.button`
  display: inline;
  position: absolute;
  top: 0.4rem;
  right: 0;

  width: fit-content;
  height: 3.1rem;
  margin: 1rem 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.grayScaleBG};

  ${({ theme }) => theme.fonts.Caption2_SB_12};
  color: ${({ theme }) => theme.colors.grayScaleWhite};
`;

const FileLabel = styled.label`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.1rem;
  margin-top: 0.4rem;
  padding: 1rem 1.5rem;
  ${({ theme }) => theme.fonts.Title2_M_16};
  border: none;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.grayScaleLG1};

  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;

const FileInput = styled.input`
  display: none;
`;
