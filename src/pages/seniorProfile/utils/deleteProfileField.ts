import { dayOfWeekTimeList, preferredTimeType } from "@pages/seniorProfile/types";

const removeField = <T extends object, K extends keyof T>(field: K) => {
  return (obj: T): Omit<T, K> => {
    const { [field]: _, ...rest } = obj;
    return rest;
  };
};

// 주어진 timeList에서 isActive 필드를 제거하는 함수
export const deleteProfileField = (timeList: dayOfWeekTimeList): dayOfWeekTimeList => {
  const removeIsActive = removeField<preferredTimeType, 'isActive'>('isActive');

  return Object.keys(timeList).reduce((acc, day) => {
    acc[day as keyof dayOfWeekTimeList] = timeList[day as keyof dayOfWeekTimeList].map(removeIsActive);
    return acc;
  }, {} as dayOfWeekTimeList);
};
