import { useMutation } from '@tanstack/react-query';
import { joinAxios } from '../apis/joinAxios';
import { JoinPropType } from '../type';

const useJoinQuery = () => {
  const mutation = useMutation({
    mutationFn: (requestBody: JoinPropType) => joinAxios(requestBody),
    onSuccess: (data) => {
      localStorage.setItem('role', data.data.role);
    },
    onError: (error) => {
      console.log('join patch Error: ', error);
    },
  });

  return mutation;
};

export default useJoinQuery;
