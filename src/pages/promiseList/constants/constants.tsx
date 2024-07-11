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
  level?: number;
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
  pending: [
    {
      appointmentId: 1,
      appointmentStatus: 'PENDING',
      nickname: '오훈',
      image: 'https://example.com/junior1.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: 'portfolio',
    },
    {
      appointmentId: 2,
      appointmentStatus: 'PENDING',
      nickname: '김도현',
      image: 'https://example.com/junior2.jpg',
      field: '공학계열',
      department: '산업공학과',
      topic: 'portfolio',
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
      date: '2024.07.11',
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
      date: '2024.07.11',
      startTime: '18:00',
      endTime: '18:30',
    },
  ],
  past: [
    {
      appointmentId: 5,
      appointmentStatus: 'PAST',
      nickname: '오훈',
      image: 'https://example.com/junior1.jpg',
      field: '공학계열',
      department: '산업공학과',
    },
    {
      appointmentId: 6,
      appointmentStatus: 'REJECTED',
      nickname: '김도현',
      image: 'https://example.com/junior2.jpg',
      field: '공학계열',
      department: '산업공학과',
      date: '2024.07.11',
      startTime: '18:00',
      endTime: '18:30',
    },
  ],
};

export interface JUNIOR_DATA_PENDING {
  appointmentId: number;
  appointmentStatus: string;
  nickname: string;
  image: string;
  company: string;
  field: string;
  position: string;
  detailPosition: string;
  level: number;
}

export const JUNIOR_DATA = {
  appointmentList: [
    {
      appointmentId: 1,
      appointmentStatus: 'PENDING',
      nickname: '조승희',
      image: 'https://example.com/senior1.jpg',
      company: 'SOPT Makers',
      field: '공학계열',
      position: '개발',
      detailPosition: 'FE챕터장',
      level: 3,
    },
    {
      appointmentId: 2,
      appointmentStatus: 'SCHEDULED',
      nickname: '홍석범',
      image: 'https://example.com/senior2.jpg',
      company: '다이닝코드',
      field: '공학계열',
      position: '개발',
      detailPosition: 'BE Developer',
      level: 4,
      date: '2024.08.05',
      startTime: '14:30',
      endTime: '15:00',
    },
    {
      appointmentId: 3,
      appointmentStatus: 'PAST',
      nickname: '오훈',
      image: 'https://example.com/senior3.jpg',
      company: '선약',
      field: '예체능계열',
      position: '디자인',
      detailPosition: 'UX 디자이너',
      level: 5,
      date: '2024.07.05',
      startTime: '14:00',
      endTime: '14:30',
    },
    {
      appointmentId: 3,
      appointmentStatus: 'REJECTED',
      nickname: '백예린',
      image: 'https://example.com/senior4.jpg',
      company: '선약',
      field: '예체능계열',
      position: '디자인',
      detailPosition: 'UI 디자이너',
      level: 6,
    },
  ],
};
