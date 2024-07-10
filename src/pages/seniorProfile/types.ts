export interface seniorProfileAPIType {
  catchphrase: string;
  career: string;
  award: string;
  story: string;
  level: number;
  isDayOfWeek: boolean;
  preferredTimeList: preferredTimeListType;
}

export interface preferredTimeListType {
  dayOfWeek: dayOfWeekTimeList;
  weekend: weekendTimeList;
}

export interface preferredTimeType {
  startTime: string;
  endTime: string;
}

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

export const seniorProfileInitial: seniorProfileAPIType = {
  catchphrase: '',
  career: '',
  award: '',
  story: '',
  level: 0,
  isDayOfWeek: false,
  preferredTimeList: {
    dayOfWeek: {
      월: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      화: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      수: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      목: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      금: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      토: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      일: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
    },
    weekend: {
      주말: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
      주중: [
        {
          startTime: '시작 시간',
          endTime: '마지막 시간',
        },
      ],
    },
  },
};

export interface profilePropType {
  profile: seniorProfileAPIType;
  // eslint-disable-next-line no-undef
  setProfile: React.Dispatch<React.SetStateAction<seniorProfileAPIType>>;
}
