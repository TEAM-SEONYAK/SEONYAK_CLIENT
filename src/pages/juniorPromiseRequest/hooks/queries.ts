import { useMutation, useQuery } from '@tanstack/react-query';

import { postAppointment } from '../apis/postAppointment';
import { postAppointmentType } from '../apis/postAppointment';
import { getSeniorTimeAxios } from '../apis/getSeniorTimeAxios';
import axios from 'axios';

export const QUERY_KEY_JUNIOR_PROMISE_SEND = {
  postAppointment: postAppointment,
  getSeniorTimeAxios: getSeniorTimeAxios,
};

export const usePostAppointment = (onSuccessCallback?: () => void, onErrorCallback?: (error: string) => void) => {
  const { mutate, data } = useMutation({
    mutationKey: [QUERY_KEY_JUNIOR_PROMISE_SEND.postAppointment],
    mutationFn: ({ seniorId, topic, personalTopic, timeList }: postAppointmentType) =>
      postAppointment({ seniorId, topic, personalTopic, timeList }),
    onSuccess: () => {
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onError: (error) => {
      let errorMessage = '알 수 없는 오류가 발생했습니다.';
      if (axios.isAxiosError(error) && error.response) {
        if (error.response?.status === 403 || error.response?.status === 400) {
          errorMessage = '이미 약속을 신청한 선배입니다.';
        } else {
          errorMessage = '약속 신청에 실패했습니다.';
        }
      }
      if (onErrorCallback) {
        onErrorCallback(errorMessage);
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
