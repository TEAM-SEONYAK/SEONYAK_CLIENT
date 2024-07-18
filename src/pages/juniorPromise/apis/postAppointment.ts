// 후배 약속 신청 POST
import { authAxios } from '@utils/apis';

export interface timeListType {
  date: string;
  startTime: string;
  endTime: string;
}

export interface postAppointmentType {
  seniorId: number;
  topic: string[];
  personalTopic: string;
  TimeList: timeListType[];
}

export const postAppointment = async ({ seniorId, topic, personalTopic, TimeList }: postAppointmentType) => {
  try {
    const response = await authAxios.post('/api/v1/appointment', { seniorId, topic, personalTopic, TimeList });

    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
