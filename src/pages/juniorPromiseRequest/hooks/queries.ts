import { useMutation, useQuery } from '@tanstack/react-query';

import { postAppointment } from '../apis/postAppointment';
import { getSeniorTimeAxios } from '../apis/getSeniorTimeAxios';
import axios from 'axios';

const QUERY_KEYS = {
  postAppointment: 'postAppointment',
  getSeniorTime: 'getSeniorTime',
};

export const usePostAppointment = (onSuccess?: () => void, onError?: (error: string) => void) => {
  return useMutation({
    mutationKey: [QUERY_KEYS.postAppointment],
    mutationFn: postAppointment,
    onSuccess,
    onError: (error) => {
      const errorMessage =
        axios.isAxiosError(error) && error.response?.data?.message
          ? error.response.data.message
          : '알 수 없는 오류가 발생했습니다.';
      onError?.(errorMessage);
    },
  });
};

export const useSeniorTimeQuery = (seniorId: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.getSeniorTime, seniorId],
    queryFn: () => getSeniorTimeAxios(seniorId),
  });
};
