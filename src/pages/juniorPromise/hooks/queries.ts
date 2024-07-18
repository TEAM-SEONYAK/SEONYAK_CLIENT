import { useMutation } from '@tanstack/react-query';
import { postAppointment, postAppointmentType } from '../apis/postAppointment';

export const QUERY_KEY_PROMISE_DETAIL = {
  postAppointment: postAppointment,
};

// 후배 약속 신청
export const usePostAppointment = (onSuccessCallback?: () => void) => {
  const { mutate, data } = useMutation({
    mutationKey: [QUERY_KEY_PROMISE_DETAIL.postAppointment],
    mutationFn: ({ seniorId, topic, personalTopic, TimeList }: postAppointmentType) =>
      postAppointment({ seniorId, topic, personalTopic, TimeList }),

    onSuccess: () => {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onError: (error) => {
      console.log('Error in mutation:', error.message);
    },
  });
  return { mutate, data };
};
