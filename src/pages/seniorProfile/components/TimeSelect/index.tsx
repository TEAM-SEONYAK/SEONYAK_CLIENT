import { FullBtn } from '@components/commons/FullButton';
import Toaster from '@components/commons/Toaster';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import TimeWeekdays from '@pages/seniorProfile/components/TimeSelect/TimeWeekdays';
import { TOASTER_TEXT } from '@pages/seniorProfile/constants';
import { funnelComponentPropType } from '@pages/seniorProfile/types';
import { isDropdownActive } from '@pages/seniorProfile/utils/isDropdownActive';
import { useState } from 'react';
import TimeAlldays from './TimeAlldays';
import ToggleButton from '../../../../components/commons/ToggleButton';

const TimeSelect = ({ profile, setProfile, setStep }: funnelComponentPropType) => {
  const [selectToggle, setSelectToggle] = useState<'left' | 'right'>('left');
  const [isBtnActive, setIsBtnActive] = useState(true);
  const [isToaster, setIsToaster] = useState(false);
  // const [isWarning, setIsWarning] = useState(false);
  const isWarning = false;
  const handleActiveButton = () => {
    setSelectToggle((prev) => (prev === 'left' ? 'right' : 'left'));
  };

  const handleActiveBtnClick = () => {
    !isToaster &&
      setIsToaster(
        isDropdownActive({
          timeList: profile.preferredTimeList,
          type: selectToggle === 'left' ? 'weekend' : 'dayOfWeek',
        }),
      );
    setStep && setStep((prev) => prev + 1);
  };
  const handleInactiveBtnClick = () => {};

  console.log({ isToaster });
  return (
    <>
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
      {isToaster && <Toaster text={TOASTER_TEXT} />}
      <FullBtn
        text="다음으로"
        onClick={handleActiveBtnClick}
        isActive={isBtnActive}
        onInactiveClick={handleInactiveBtnClick}
      />
    </>
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
