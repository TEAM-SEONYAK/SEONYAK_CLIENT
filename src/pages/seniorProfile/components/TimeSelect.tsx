import { useState } from 'react';
import DropDown from './common/DropDown';

const TimeSelect = () => {
  const [isWeekday, setIsWeekday] = useState(true);
  return <DropDown />;
};

export default TimeSelect;
