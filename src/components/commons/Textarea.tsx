/* eslint-disable no-unused-vars */
import styled from '@emotion/styled';
import React from 'react';

interface InputPropType {
  placeholder: string;
  wordLimit: number;
  height: number;
  inputVal: string;
  handleInputVal: (val: string) => void;

  variant?: 'default' | 'secondary';
}

const Textarea = (props: InputPropType) => {
  const { placeholder, wordLimit, height, inputVal, handleInputVal, variant = 'default' } = props;

  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputVal(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <TextareaLayout>
        <TextareaContainer
          placeholder={placeholder}
          onChange={handleChangeTextarea}
          maxLength={wordLimit}
          value={inputVal}
          $isValid={inputVal.length <= wordLimit}
          $height={height}
          $isSmallFont={variant === 'secondary'}
        />
        <WordLimitContainer>
          <Word $isLimit={inputVal.length <= wordLimit}>{inputVal.length}</Word>
          <WordLimit>/{wordLimit}</WordLimit>
        </WordLimitContainer>
      </TextareaLayout>
    </Wrapper>
  );
};

export default Textarea;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 0.6rem;
`;

const TextareaLayout = styled.div`
  position: relative;
`;

const TextareaContainer = styled.textarea<{ $isValid: boolean; $height: number; $isSmallFont: boolean }>`
  overflow: hidden;

  width: 100%;
  height: ${({ $height }) => `${$height}rem`};
  padding: 1.1rem 1.4rem 3rem;
  border: ${({ $isValid, theme }) => ($isValid ? '1px solid transparent' : `1px solid ${theme.colors.Red}`)};
  border-radius: 8px;

  background-color: ${({ $isValid, theme }) => ($isValid ? theme.colors.grayScaleLG1 : theme.colors.transparentRed_3)};
  ${({ theme, $isSmallFont }) => ($isSmallFont ? theme.fonts.Body1_M_14 : theme.fonts.Title2_M_16)}

  &::placeholder {
    color: ${({ theme }) => theme.colors.grayScaleMG2};
  }
`;

const WordLimitContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 1.2rem;
  bottom: 1rem;
`;

const Word = styled.span<{ $isLimit: boolean }>`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ $isLimit, theme }) => ($isLimit ? theme.colors.grayScaleMG2 : theme.colors.Red)};
`;

const WordLimit = styled.span`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme }) => theme.colors.grayScaleMG2};
`;
