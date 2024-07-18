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
  timeList: timeListType[];
}

export const postAppointment = async ({ seniorId, topic, personalTopic, timeList }: postAppointmentType) => {
  try {
    const response = await authAxios.post('/v1/appointment', { seniorId, topic, personalTopic, timeList });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
