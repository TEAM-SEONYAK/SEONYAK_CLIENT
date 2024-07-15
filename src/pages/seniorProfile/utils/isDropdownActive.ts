import { preferredTimeListType } from '@pages/seniorProfile/types';

interface isDropdownActivePropType {
  timeList: preferredTimeListType;
  type: 'weekend' | 'dayOfWeek';
}

export const isDropdownActive = ({ timeList, type }: isDropdownActivePropType) => {
  if (type === 'weekend') {
    return Object.values(timeList.weekend).every((dayArray) => dayArray.isActive === true);
  }
  return Object.values(timeList.dayOfWeek).every((dayArray) => dayArray.isActive === true);
};
