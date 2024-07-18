import { useMutation } from '@tanstack/react-query';

import { postAppointment } from '../apis/postAppointment';
import { postAppointmentType } from '../apis/postAppointment';

export const QUERY_KEY_JUNIOR_PROMISE_SEND = {
  postAppointment: postAppointment,
};

export const usePostAppointment = (onSuccessCallback?: () => void) => {
  const { mutate, data } = useMutation({
    mutationKey: [QUERY_KEY_JUNIOR_PROMISE_SEND.postAppointment],
    mutationFn: ({ seniorId, topic, personalTopic, timeList }: postAppointmentType) =>
      postAppointment({ seniorId, topic, personalTopic, timeList }),
    onSuccess: () => {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
  });

  return { mutate, data };
};
