import { useQuery } from '@tanstack/react-query';
import presignedUrlAxios from '../apis/presignedUrlAxios';

const usePresignedUrlQuery = () => {
  const { data } = useQuery({
    queryKey: ['presigned'],
    queryFn: () => presignedUrlAxios(),
  });
  return data?.data.data;
};

export default usePresignedUrlQuery;
