import { useQuery } from '@tanstack/react-query';
import { presignedUrlAxios } from '../apis/profileImageAxios';

const usePresignedUrl = () => {
  const { data, refetch } = useQuery({
    queryKey: ['presignedurl'],
    queryFn: () => presignedUrlAxios(),
  });
  return { res: data?.data?.data, refetch };
};

export default usePresignedUrl;
