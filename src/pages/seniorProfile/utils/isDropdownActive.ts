import { preferredTimeListType, preferredTimeType } from '@pages/seniorProfile/types';

export const isDropdownActive = (data: preferredTimeListType['dayOfWeek' | 'weekend']) => {
  return Object.values(data).every((dayArr: preferredTimeType[]) => dayArr.every((item) => item.isActive));
};
