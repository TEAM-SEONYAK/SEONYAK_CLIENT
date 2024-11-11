// 구글밋 링크 get
import { authAxios } from '@utils/apis';

export const getGoogleMeetLink = async (appointmentId: number) => {
  try {
    const response = await authAxios.get(`/api/v1/google-meet/${appointmentId}`);
    // console.log(response.data.data.googleMeetLink);
    return response.data.data.googleMeetLink;
  } catch (error) {
    console.error('구글밋 링크 받기 에러:', error);
    throw error;
  }
};
