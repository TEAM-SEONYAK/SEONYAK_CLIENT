// 구글 미트 회의실 개설
import { authAxios } from '@utils/apis';

export const postGoogleMeetLink = async () => {
  try {
    const response = await authAxios.post('/google-meet');
    // console.log(response.data.data.googleMeet);
    return response.data.data.googleMeet;
  } catch (err) {
    console.log(err);
  }
};
