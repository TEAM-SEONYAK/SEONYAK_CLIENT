import { useMutation } from '@tanstack/react-query';
import { joinAxios } from '../apis/joinAxios';
import { JoinPropType } from '../type';
import { setRole, setSeniorId } from '@utils/storage';

const useJoinQuery = () => {
  const mutation = useMutation({
    mutationFn: (requestBody: JoinPropType) => joinAxios(requestBody),
    onSuccess: (data) => {
      setRole(data.data.data.role);
      setSeniorId(data.data.data.seniorId + '');
    },
    onError: (error) => {
      console.log('🔴 join patch Error: ', error);
    },
  });

  return mutation;
};

export default useJoinQuery;
