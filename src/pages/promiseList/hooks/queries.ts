import { postGoogleMeetLink } from '../apis/postGoogleMeetLink';
import { useMutation } from '@tanstack/react-query';

export const QUERY_KEY_PROMISE_DETAIL = {
  postGoogleMeetLink: postGoogleMeetLink,
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
