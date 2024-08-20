import { useQuery } from '@tanstack/react-query';
import { presignedUrlAxios } from '../apis/profileImageAxios';

const usePresignedUrl = () => {
  const { data } = useQuery({
    queryKey: ['presignedurl'],
    queryFn: () => presignedUrlAxios(),
  });
  return { res: data?.data?.data };
};

export default usePresignedUrl;
