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
      topic: '면접에 관해 얘기하고 싶어요',
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
      date: '2024.07.11',
      startTime: '18:00',
      endTime: '18:30',
    },
    {
      appointmentId: 6,
      appointmentStatus: 'REJECTED',
      nickname: '김도현',
      image: 'https://example.com/junior2.jpg',
      field: '공학계열',
      department: '산업공학과',
    },
  ],
};
