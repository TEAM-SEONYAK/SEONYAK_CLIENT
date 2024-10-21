import { useEffect, useState } from 'react';

export const useValidation = (option: string, wordLimit: number) => {
  const [isNextActive, setIsNextActive] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    if (option.length > 0) {
      setIsNextActive(true);
      if (option.length > wordLimit) {
        setIsWarning(true);
        setIsNextActive(false);
      } else setIsWarning(false);
    } else setIsNextActive(false);
  }, [option]);

  return { isNextActive, isWarning };
};
