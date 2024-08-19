import { useQuery } from '@tanstack/react-query';
import { profileImageAxios } from '../apis/profileImageAxios';

const usePresignedUrl = () => {
  const { isSuccess, data } = useQuery({
    queryKey: ['presignedurl'],
    queryFn: () => profileImageAxios(),
  });
  return { isSuccess, response: data?.data.data };
};

export default usePresignedUrl;
