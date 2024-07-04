import styled from '@emotion/styled';
import React, { useState } from 'react';
import { WarnIc } from '../../assets/svgs';

interface InputPropType {
  placeholder: string;
  wordLimit: number;
  height: number;
}

const Input = (props: InputPropType) => {
  const { placeholder, wordLimit, height } = props;
  const [inputVal, setInputVal] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputVal(e.currentTarget.value);
  };
  return (
    <>
      <Wrapper>
        <Textarea
          placeholder={placeholder}
          onChange={onChangeInput}
          $isValid={inputVal.length <= wordLimit}
          $height={height}
        />
        <WordLimitContainer>
          <Word $isLimit={inputVal.length <= wordLimit}>{inputVal.length}</Word>
          <WordLimit>/{wordLimit}</WordLimit>
        </WordLimitContainer>
      </Wrapper>    
      <LimitWarnContainer>
        <WarnIc />
        <LimitWarnText>글자 수가 초과되었어요</LimitWarnText>
      </LimitWarnContainer>
    </>
  );
};

export default Input;

const Wrapper = styled.div`
  position: relative;
`;

const Textarea = styled.textarea<{ $isValid: boolean; $height: number }>`
  width: 33.5rem;
  height: ${({ $height }) => `${$height}rem`};
  padding: 1.1rem 1.4rem 3rem;
  border: ${({ $isValid, theme }) => ($isValid ? '1px solid transparent' : `1px solid ${theme.colors.Red}`)};
  border-radius: 8px;

  background-color: ${({ $isValid, theme }) => ($isValid ? theme.colors.grayScaleLG1 : theme.colors.transparentRed_3)};
  ${({ theme }) => theme.fonts.Title2_M_16}

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

const LimitWarnContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  margin-top: 0.6rem;
`;

const LimitWarnText = styled.span`
  ${({ theme }) => theme.fonts.Caption3_M_12};
  color: ${({ theme }) => theme.colors.Red};
`;
