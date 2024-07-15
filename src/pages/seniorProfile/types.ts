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
  level: string;
  nickname: string;
}

export interface preferredTimeListType {
  dayOfWeek: dayOfWeekTimeList;
  weekend: weekendTimeList;
}

export interface preferredTimeType {
  isActive?: boolean;
  startTime: string;
  endTime: string;
  isStartValid?: boolean;
  isEndValid?: boolean;
}

export type TimeCategoryType = 'isActive' | 'startTime' | 'endTime' | 'isStartValid' | 'isEndValid';

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
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
      화: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
      수: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
      목: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
      금: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
      토: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
      일: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
    },
    weekend: {
      주말: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
      주중: [
        {
          isActive: false,
          startTime: '시작 시간',
          endTime: '마지막 시간',
          isStartValid: true,
          isEndValid: true,
        },
      ],
    },
  },
};

export interface funnelComponentPropType {
  profile?: seniorProfileRegisterType;
  setProfile?: React.Dispatch<React.SetStateAction<seniorProfileRegisterType>>;
  setIsNextActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setStep?: React.Dispatch<React.SetStateAction<number>>;
}
