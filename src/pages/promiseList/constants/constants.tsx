// userrole = senior 경우
export interface profileCardDataType {
  appointmentId: number;
  appointmentStatus: string;
  nickname: string;
  image: string;
  field: string;
  department?: string;
  topic?: string;
  date?: string;
  startTime?: string;
  endTime?: string;
  company?: string;
  position?: string;
  detailPosition?: string;
  level?: string;
}

export interface SENIOR_DATA_PENDING {
  appointmentId: number;
  appointmentStatus: string;
  nickname: string;
  image: string;
  field: string;
  department: string;
  topic: string;
}

export interface SENIOR_DATA_SCHEDULED {
  appointmentId: number;
  appointmentStatus: string;
  nickname: string;
  image: string;
  field: string;
  department: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface SENIOR_DATA_PAST {
  appointmentId: number;
  appointmentStatus: string;
  nickname: string;
  image: string;
  field: string;
  department: string;
}

export const SENIOR_DATA = {
  myNickname: '윤서진',
  pending: [
    {
      appointmentId: 1,
      appointmentStatus: 'PENDING',
      nickname: '오훈',
      image: 'https://example.com/junior1.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: '면접에 관해 얘기하고 싶어요',
    },
    {
      appointmentId: 2,
      appointmentStatus: 'PENDING',
      nickname: '김도현',
      image: 'https://example.com/junior2.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: '면접에 관해 얘기하고 싶어요',
    },
  ],
  scheduled: [
    {
      appointmentId: 3,
      appointmentStatus: 'SCHEDULED',
      nickname: '오훈',
      image: 'https://example.com/junior1.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: '면접에 관해 얘기하고 싶어요',
      date: '2024.07.10',
      startTime: '17:00',
      endTime: '17:30',
    },
    {
      appointmentId: 4,
      appointmentStatus: 'SCHEDULED',
      nickname: '김도현',
      image: 'https://example.com/junior2.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: '면접에 관해 얘기하고 싶어요',
      date: '2024.07.11',
      startTime: '18:00',
      endTime: '18:30',
    },
    {
      appointmentId: 5,
      appointmentStatus: 'SCHEDULED',
      nickname: '오훈',
      image: 'https://example.com/junior1.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: '면접에 관해 얘기하고 싶어요',
      date: '2024.07.17',
      startTime: '17:00',
      endTime: '17:30',
    },
    {
      appointmentId: 6,
      appointmentStatus: 'SCHEDULED',
      nickname: '김도현',
      image: 'https://example.com/junior2.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: '면접에 관해 얘기하고 싶어요',
      date: '2024.07.11',
      startTime: '18:00',
      endTime: '18:30',
    },
  ],
  past: [
    {
      appointmentId: 7,
      appointmentStatus: 'PAST',
      nickname: '오훈',
      image: 'https://example.com/junior1.jpg',
      field: '공학계열',
      department: '산업공학과',
      date: '2024.07.11',
      startTime: '18:00',
      endTime: '18:30',
    },
    {
      appointmentId: 8,
      appointmentStatus: 'REJECTED',
      nickname: '김도현',
      image: 'https://example.com/junior2.jpg',
      field: '공학계열',
      department: '산업공학과',
    },
  ],
};

export const JUNIOR_DATA = {
  myNickname: '김창균',
  pending: [
    {
      appointmentId: 1,
      appointmentStatus: 'PENDING',
      nickname: '조승희',
      image: 'https://example.com/senior1.jpg',
      company: 'SOPT Makers',
      field: '공학계열',
      position: '개발',
      detailPosition: 'FE챕터장',
      level: '2년차',
    },
  ],
  scheduled: [
    {
      appointmentId: 2,
      appointmentStatus: 'SCHEDULED',
      nickname: '홍석범',
      image: 'https://example.com/senior2.jpg',
      company: '다이닝코드',
      field: '공학계열',
      position: '개발',
      detailPosition: 'BE Developer',
      level: '5년차',
      date: '2024.08.05',
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      appointmentId: 3,
      appointmentStatus: 'SCHEDULED',
      nickname: '홍석범',
      image: 'https://example.com/senior2.jpg',
      company: '다이닝코드',
      field: '공학계열',
      position: '개발',
      detailPosition: 'BE Developer',
      level: '5년차',
      date: '2024.08.05',
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      appointmentId: 4,
      appointmentStatus: 'SCHEDULED',
      nickname: '홍석범',
      image: 'https://example.com/senior2.jpg',
      company: '다이닝코드',
      field: '공학계열',
      position: '개발',
      detailPosition: 'BE Developer',
      level: '5년차',
      date: '2024.08.05',
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      appointmentId: 5,
      appointmentStatus: 'SCHEDULED',
      nickname: '홍석범',
      image: 'https://example.com/senior2.jpg',
      company: '다이닝코드',
      field: '공학계열',
      position: '개발',
      detailPosition: 'BE Developer',
      level: '5년차',
      date: '2024.08.05',
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      appointmentId: 6,
      appointmentStatus: 'SCHEDULED',
      nickname: '홍석범',
      image: 'https://example.com/senior2.jpg',
      company: '다이닝코드',
      field: '공학계열',
      position: '개발',
      detailPosition: 'BE Developer',
      level: '5년차',
      date: '2024.08.05',
      startTime: '14:30',
      endTime: '15:00',
    },
  ],
  past: [
    {
      appointmentId: 7,
      appointmentStatus: 'PAST',
      nickname: '오훈',
      image: 'https://example.com/senior3.jpg',
      company: '선약',
      field: '예체능계열',
      position: '디자인',
      detailPosition: 'UX 디자이너',
      level: '8년차',
      date: '2024.07.05',
      startTime: '14:00',
      endTime: '14:30',
    },
    {
      appointmentId: 8,
      appointmentStatus: 'REJECTED',
      nickname: '백예린',
      image: 'https://example.com/senior4.jpg',
      company: '선약',
      field: '예체능계열',
      position: '디자인',
      detailPosition: 'UI 디자이너',
      level: '11년차',
      // 거절 라이팅?
    },
  ],
};

// promise Tap
export const PROMISE_TAP = [
  { tap: 'pending', text: '확정 대기' },
  { tap: 'scheduled', text: '예정 약속' },
  { tap: 'past', text: '지난 약속' },
];

export const EMPTY_VIEW_TEXT = [
  { tap: 'pending', text: '확정 대기 중인 약속이 없어요' },
  { tap: 'scheduled', text: '예정된 약속이 없어요' },
  { tap: 'past', text: '지난 약속이 없어요' },
];
