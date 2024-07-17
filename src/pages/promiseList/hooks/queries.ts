import { postGoogleMeetLink } from '../apis/postGoogleMeetLink';
import { patchSeniorAccept, patchSeniorAcceptRequestType } from '../apis/patchSeniorPromiseAccept';
import { useMutation } from '@tanstack/react-query';

export const QUERY_KEY_PROMISE_DETAIL = {
  postGoogleMeetLink: postGoogleMeetLink,
  patchSeniorAccept: patchSeniorAccept,
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
      console.error('Error in mutation:', error);
    },
  });

  return { mutate, data };
};
