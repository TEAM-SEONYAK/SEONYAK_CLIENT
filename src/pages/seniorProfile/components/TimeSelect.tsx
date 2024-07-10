import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import { profilePropType } from '@pages/seniorProfile/types';
import { useState } from 'react';
import TimeAlldays from './TimeAlldays';
import TimeWeekdays from './TimeWeekdays';
import ToggleButton from '../../../components/commons/ToggleButton';

const TimeSelect = ({ profile, setProfile }: profilePropType) => {
  const [selectToggle, setSelectToggle] = useState<'left' | 'right'>('left');
  // const [isWarning, setIsWarning] = useState(false);
  const isWarning = false;
  const handleActiveButton = () => {
    setSelectToggle((prev) => (prev === 'left' ? 'right' : 'left'));
  };

  return (
    <Wrapper>
      <ToggleButton
        left="주중/주말 선택"
        right="모든 요일 선택"
        activeButton={selectToggle}
        onToggle={handleActiveButton}
      />
      <WarnWrapper>
        <WarnDescription isShown={isWarning} warnText="시간을 입력해주세요" />
      </WarnWrapper>
      {selectToggle === 'left' ? (
        <TimeWeekdays profile={profile} setProfile={setProfile} />
      ) : (
        <TimeAlldays profile={profile} setProfile={setProfile} />
      )}
    </Wrapper>
  );
};

export default TimeSelect;

const Wrapper = styled.div`
  overflow-y: scroll;

  padding-top: 3.2rem;
`;

const WarnWrapper = styled.div`
  padding: 1rem 0 0.6rem 1.8rem;
`;
