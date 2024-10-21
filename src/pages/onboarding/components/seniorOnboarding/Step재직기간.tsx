import { useState } from 'react';
import SelectBox from '../SelectBox';
import { FullBtn } from '@components/commons/FullButton';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { JoinContextType } from '@pages/onboarding/type';

const Step재직기간 = () => {
  const { data, setData } = useOutletContext<JoinContextType>();
  const navigate = useNavigate();

  const PLACEHOLDER = '연차를 선택해 주세요';
  const [select, setSelect] = useState(data.level || PLACEHOLDER);

  const handleSetSelect = (value: string) => {
    setSelect(value);
  };
  const handleClickLink = () => {
    setData((prev) => ({
      ...prev,
      level: select,
    }));
    navigate('/seniorOnboarding/10');
  };

  return (
    <>
      <div style={{ padding: '0 2rem' }}>
        <SelectBox select={select} onSetSelect={handleSetSelect} placeholder={PLACEHOLDER} />
      </div>
      <FullBtn isActive={select !== PLACEHOLDER} onClick={handleClickLink} />
    </>
  );
};

export default Step재직기간;
