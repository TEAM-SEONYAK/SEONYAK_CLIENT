import { useState } from 'react';
import SelectBox from '../SelectBox';
import { FullBtn } from '@components/commons/FullButton';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { JoinContextType } from '@pages/onboarding/type';

const Step재직기간 = () => {
  const { setData } = useOutletContext<JoinContextType>();
  const navigate = useNavigate();

  const PLACEHOLDER = '연차를 선택해 주세요';
  const [select, setSelect] = useState(PLACEHOLDER);

  const handleSetSelect = (value: string) => {
    setSelect(value);
  };
  const handleClickLink = () => {
    setData((prev) => ({
      ...prev,
      level: select,
    }));
    navigate('/seniorOnboarding/11');
  };

  return (
    <>
      <SelectBox select={select} onSetSelect={handleSetSelect} placeholder={PLACEHOLDER} />
      <FullBtn isActive={select !== PLACEHOLDER} onClick={handleClickLink} />
    </>
  );
};

export default Step재직기간;
