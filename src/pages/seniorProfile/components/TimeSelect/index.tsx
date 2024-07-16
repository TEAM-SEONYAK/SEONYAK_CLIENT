import { FullBtn } from '@components/commons/FullButton';
import Toaster from '@components/commons/Toaster';
import WarnDescription from '@components/commons/WarnDescription';
import styled from '@emotion/styled';
import TimeWeekdays from '@pages/seniorProfile/components/TimeSelect/TimeWeekdays';
import { TOASTER_TEXT } from '@pages/seniorProfile/constants';
import { funnelComponentPropType } from '@pages/seniorProfile/types';
import { isDropdownActive } from '@pages/seniorProfile/utils/isDropdownActive';
import { isTimeValid } from '@pages/seniorProfile/utils/isTimeValid';
import { useEffect, useState } from 'react';
import TimeAlldays from './TimeAlldays';
import ToggleButton from '../../../../components/commons/ToggleButton';

const TimeSelect = ({ profile, setProfile, setStep }: funnelComponentPropType) => {
  const [leftToggleText, rightToggleText] = ['주중/주말 선택', '모든 요일 선택'];
  const [selectToggle, setSelectToggle] = useState<string>(profile.isDayOfWeek ? rightToggleText : leftToggleText);
  const timeType = selectToggle === '주중/주말 선택' ? 'weekend' : 'dayOfWeek';
  const [isBtnActive, setIsBtnActive] = useState(true);
  const [isToaster, setIsToaster] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    if (isTimeValid(profile.preferredTimeList[timeType])) {
      setIsBtnActive(true);
      setIsWarning(false);
    } else {
      setIsBtnActive(false);
      setIsToaster(false);
    }
  }, [profile.preferredTimeList]);

  const handleToggleBtn = (selectedToggle: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      isDayOfWeek: selectedToggle === rightToggleText,
    }));
    setIsWarning(false);
    setIsToaster(false);
    setSelectToggle(selectedToggle);
    console.log({ selectedToggle, selectToggle });
    console.log(profile.isDayOfWeek);
  };

  const handleActiveBtnClick = () => {
    if (isToaster) {
      setStep && setStep((prev) => prev + 1);
      return;
    }

    isDropdownActive(profile.preferredTimeList[timeType]) ? setStep && setStep((prev) => prev + 1) : setIsToaster(true);
  };

  const handleInactiveBtnClick = () => {
    setIsWarning(true);
  };

  return (
    <>
      <Wrapper>
        <ToggleButton
          left={leftToggleText}
          right={rightToggleText}
          activeButton={selectToggle}
          onSetActiveButtonHandler={handleToggleBtn}
        />
        <WarnWrapper>
          <WarnDescription isShown={isWarning} warnText="시간을 입력해주세요" />
        </WarnWrapper>
        {selectToggle === leftToggleText ? (
          <TimeWeekdays profile={profile} setProfile={setProfile} isWarning={isWarning} />
        ) : (
          <TimeAlldays profile={profile} setProfile={setProfile} isWarning={isWarning} />
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
