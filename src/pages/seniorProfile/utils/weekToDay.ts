import { dayOfWeekTimeList, dayType, preferredTimeListType, preferredTimeType } from '@pages/seniorProfile/types';

export const weekToDay = (isDayOfWeek: boolean, preferredTimeList: preferredTimeListType): dayOfWeekTimeList => {
  if (isDayOfWeek) return preferredTimeList['dayOfWeek'];

  const ret: dayOfWeekTimeList = {
    월: [],
    화: [],
    수: [],
    목: [],
    금: [],
    토: [],
    일: [],
  };

  const weekToDayList = {
    주중: ['월', '화', '수', '목', '금'],
    주말: ['토', '일'],
  };

  ['주중', '주말'].forEach((weekType) => {
    preferredTimeList.weekend[weekType].forEach((item: preferredTimeType) => {
      weekToDayList[weekType].forEach((요일: dayType) => {
        ret[요일].push(item);
      });
    });
  });

  return ret;
};
