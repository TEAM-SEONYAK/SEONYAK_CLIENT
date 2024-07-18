// 선배 약속 거절 api
import { authAxios } from '@utils/apis';

export interface patchSeniorRejectRequestType {
  appointmentId: number;
  rejectReason: string;
  rejectDetail: string;
}

export const patchSeniorReject = async ({
  appointmentId,
  rejectReason,
  rejectDetail,
}: patchSeniorRejectRequestType) => {
  try {
    const response = await authAxios.patch('/v1/appointment/reject', {
      appointmentId,
      rejectReason,
      rejectDetail,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error('선배 약속 거절 에러:', error);
    throw error;
  }
};
