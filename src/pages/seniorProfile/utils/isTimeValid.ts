import { preferredTimeListType, preferredTimeType } from '@pages/seniorProfile/types';

export const isTimeValid = (timeList: preferredTimeListType['dayOfWeek' | 'weekend']) => {
  return Object.values(timeList).every((dayArr: preferredTimeType[]) =>
    dayArr.every((item) => !item.isActive || (item.startTime !== '시작 시간' && item.endTime !== '마지막 시간')),
  );
};
