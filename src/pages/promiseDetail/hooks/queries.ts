import { patchSeniorReject, patchSeniorRejectRequestType } from '../apis/patchSeniorReject';
import { useMutation } from '@tanstack/react-query';
import { patchSeniorAccept, patchSeniorAcceptRequestType } from '../apis/patchSeniorPromiseAccept';
import { postGoogleMeetLink } from '../apis/postGoogleMeetLink';

export const QUERY_KEY_PROMISE_DETAIL = {
  patchSeniorReject: patchSeniorReject,
  postGoogleMeetLink: postGoogleMeetLink,
  patchSeniorAccept: patchSeniorAccept,
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

// 구글밋 링크 받기
export const usePostGoogleMeetLink = (onSuccessCallback?: (data: string) => void) => {
  const { mutate, data } = useMutation({
    mutationKey: [QUERY_KEY_PROMISE_DETAIL.postGoogleMeetLink],
    mutationFn: postGoogleMeetLink,
    onSuccess: (data) => {
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },
  });

  return { mutate, data };
};

// 선배 약속 수락
export const usePatchSeniorAccept = (onSuccessCallback?: () => void) => {
  const { mutate, data } = useMutation({
    mutationKey: [QUERY_KEY_PROMISE_DETAIL.patchSeniorAccept],
    mutationFn: ({ appointmentId, googleMeetLink, timeList }: patchSeniorAcceptRequestType) =>
      patchSeniorAccept({ appointmentId, googleMeetLink, timeList }),
    onSuccess: () => {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onError: (error) => {
      // 에러페이지 나오면 연결필요
      console.error('Error in mutation:', error);
    },
  });

  return { mutate, data };
};
