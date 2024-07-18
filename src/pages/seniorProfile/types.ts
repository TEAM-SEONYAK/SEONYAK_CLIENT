/* eslint-disable no-undef */
export interface seniorProfileRegisterType {
  catchphrase: string;
  career: string;
  award: string;
  story: string;

  // 월/화/수/목/금/토/일: true,  주말/주중: false.
  isDayOfWeek: boolean;
  isWarning: boolean;
  preferredTimeList: preferredTimeListType;
}

export interface seniorProfileAPIType {
  catchphrase: string;
  career: string;
  award: string;
  story: string;
  preferredTimeList: dayOfWeekTimeList;
}

export interface preferredTimeListType {
  dayOfWeek: dayOfWeekTimeList;
  weekend: weekendTimeList;
}

export interface preferredTimeType {
  isActive?: boolean;
  startTime: string;
  endTime: string;
}

export type TimeCategoryType = 'isActive' | 'startTime' | 'endTime';

export interface dayOfWeekTimeList {
  월: preferredTimeType[];
  화: preferredTimeType[];
  수: preferredTimeType[];
  목: preferredTimeType[];
  금: preferredTimeType[];
  토: preferredTimeType[];
  일: preferredTimeType[];
}

export interface weekendTimeList {
  주말: preferredTimeType[];
  주중: preferredTimeType[];
}

export type dayType = '월' | '화' | '수' | '목' | '금' | '토' | '일';
export type weekendType = '주말' | '주중';

export interface TimePropType extends funnelComponentPropType {
  isWarning: boolean;
}

export const seniorProfileInitial: seniorProfileRegisterType = {
  catchphrase: '',
  career: '',
  award: '',
  story: '',
  isDayOfWeek: false,
  isWarning: false,
  preferredTimeList: {
    dayOfWeek: {
      월: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      화: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      수: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      목: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      금: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      토: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      일: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
    },
    weekend: {
      주말: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      주중: [
        {
          isActive: true,
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
    },
  },
};

export interface funnelComponentPropType {
  profile: seniorProfileRegisterType;
  setProfile: React.Dispatch<React.SetStateAction<seniorProfileRegisterType>>;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}
