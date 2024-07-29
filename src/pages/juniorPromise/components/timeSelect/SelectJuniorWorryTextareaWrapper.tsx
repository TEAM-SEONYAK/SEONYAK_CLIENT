import { useEffect } from 'react';
import Textarea from '../../../../components/commons/Textarea';

interface SelectJuniorWorryTextareaWrapperProps {
  // eslint-disable-next-line no-unused-vars
  setIsTextareaFilled: (isFilled: boolean) => void;
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
}

const SelectJuniorWorryTextareaWrapper = ({
  setIsTextareaFilled,
  inputVal,
  setInputVal,
}: SelectJuniorWorryTextareaWrapperProps) => {
  useEffect(() => {
    setIsTextareaFilled(inputVal.length > 0);
  }, [inputVal, setIsTextareaFilled]);

  const handleInputVal = (val: string) => {
    setInputVal(val);
  };
  return (
    <>
      <Textarea
        placeholder={`안녕하세요 개발자가 되고 싶은 경영학 전공 학생입니다.
1. 비전공자로서 개발자가 되기까지 얼마나 걸리셨나요?
2. 처음으로 배울 만한 언어를 추천해주실 수 있나요?
3. 앞으로의 커리어 로드맵에 대해 듣고 싶습니다.`}
        wordLimit={200}
        height={22}
        inputVal={inputVal}
        handleInputVal={handleInputVal}
      />
    </>
  );
};

export default SelectJuniorWorryTextareaWrapper;
