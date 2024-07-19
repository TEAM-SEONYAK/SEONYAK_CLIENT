import { dayOfWeekTimeList, dayType, preferredTimeListType, preferredTimeType, weekendType } from '@pages/seniorProfile/types';

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

  (['주중', '주말'] as weekendType[]).forEach((weekType) => {
    preferredTimeList.weekend[weekType].forEach((item: preferredTimeType) => {
      weekToDayList[weekType].forEach((요일: string) => {
        ret[요일 as dayType].push(item);
      });
    });
  });

  return ret;
};
