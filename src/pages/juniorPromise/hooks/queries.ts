import { useMutation, useQuery } from '@tanstack/react-query';

import { postAppointment } from '../apis/postAppointment';
import { postAppointmentType } from '../apis/postAppointment';
import { getSeniorTimeAxios } from '../apis/getSeniorTimeAxios';

export const QUERY_KEY_JUNIOR_PROMISE_SEND = {
  postAppointment: postAppointment,
  getSeniorTimeAxios: getSeniorTimeAxios,
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

export const useSeniorTimeQuery = (seniorId: number) => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY_JUNIOR_PROMISE_SEND.getSeniorTimeAxios, seniorId],
    queryFn: () => getSeniorTimeAxios(seniorId),
  });

  return { data, isSuccess, isLoading, isError };
};
