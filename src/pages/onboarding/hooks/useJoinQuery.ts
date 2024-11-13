import { useMutation } from '@tanstack/react-query';
import { joinAxios } from '../apis/joinAxios';
import { JoinPropType } from '../type';
import { setRole } from '@utils/storage';

const useJoinQuery = () => {
  const mutation = useMutation({
    mutationFn: (requestBody: JoinPropType) => joinAxios(requestBody),
    onSuccess: (data) => {
      setRole(data.data.data.role);
    },
    onError: (error) => {
      console.log('🔴 join patch Error: ', error);
    },
  });

  return mutation;
};

export default useJoinQuery;
