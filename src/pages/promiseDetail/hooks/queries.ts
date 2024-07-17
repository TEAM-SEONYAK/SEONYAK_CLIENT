import { patchSeniorReject } from '../apis/patchSeniorReject';
import { useMutation } from '@tanstack/react-query';
import { patchSeniorRejectRequestType } from '../apis/patchSeniorReject';

export const QUERY_KEY_PROMISE_DETAIL = {
  patchSeniorReject: patchSeniorReject,
};

// 선배 약속 거절
export const usePatchSeniorReject = (onSuccessCallback?: () => void) => {
  const { mutate, data } = useMutation({
    mutationKey: [QUERY_KEY_PROMISE_DETAIL.patchSeniorReject],
    mutationFn: ({ appointmentId, rejectReason, rejectDetail }: patchSeniorRejectRequestType) =>
      patchSeniorReject({ appointmentId, rejectReason, rejectDetail }),
    onSuccess: () => {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onError: (error) => {
      // 에러페이지 나오면 연결 필요
      console.log('Error in mutation:', error);
    },
  });

  return { mutate, data };
};
