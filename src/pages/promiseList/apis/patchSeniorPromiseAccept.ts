// 선배 약속 수락 api
import { authAxios } from '@utils/apis';

interface timeListType {
  date: string;
  startTime: string;
  endTime: string;
}

export interface patchSeniorAcceptRequestType {
  appointmentId: number;
  googleMeetLink: string;
  timeList: timeListType[];
}

export const patchSeniorAccept = async ({ appointmentId, googleMeetLink, timeList }: patchSeniorAcceptRequestType) => {
  try {
    const response = await authAxios.patch('/v1/appointment/accept', {
      appointmentId,
      googleMeetLink,
      timeList,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('선배 약속 수락 에러:', error);
    throw error;
  }
};
