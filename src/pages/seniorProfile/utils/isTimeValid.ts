import { preferredTimeListType, preferredTimeType } from '@pages/seniorProfile/types';

export const isTimeValid = (timeList: preferredTimeListType['dayOfWeek' | 'weekend']) => {
  return Object.values(timeList).every((dayArr: preferredTimeType[]) =>
    dayArr.every((item) => {
      const isActiveCondition = !item.isActive || (item.startTime !== '시작 시간' && item.endTime !== '마지막 시간');
      const isStartBeforeEnd = (startTime: string, endTime: string) => {
        const [startHour, startMinute] = startTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);
        return startHour < endHour || (startHour === endHour && startMinute < endMinute);
      };

      return isActiveCondition && (!item.isActive || isStartBeforeEnd(item.startTime, item.endTime));
    })
  );
};