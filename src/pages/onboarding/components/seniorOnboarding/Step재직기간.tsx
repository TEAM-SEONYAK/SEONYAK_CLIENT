import { useState } from 'react';
import SelectBox from '../SelectBox';
import { FullBtn } from '@components/commons/FullButton';
import { useNavigate } from 'react-router-dom';

const Step재직기간 = () => {
  const navigate = useNavigate();
  const handleClickLink = () => {
    navigate('/seniorOnboarding/step11');
  };

  const PLACEHOLDER = '연차를 선택해 주세요';
  const [select, setSelect] = useState(PLACEHOLDER);

  const handleSetSelect = (value: string) => {
    setSelect(value);
  };

  return (
    <>
      <SelectBox select={select} onSetSelect={handleSetSelect} placeholder={PLACEHOLDER} />
      <FullBtn isActive={select !== ''} onClick={handleClickLink} />
    </>
  );
};

export default Step재직기간;
