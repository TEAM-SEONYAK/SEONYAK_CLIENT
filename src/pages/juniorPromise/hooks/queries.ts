import { useQuery } from '@tanstack/react-query';
import { getSeniorTimeAxios } from '../apis/getSeniorTimeAxios';

export const QUERY_KEY_PRIMISE_DETAIL = {
  getSeniorTimeAxios: getSeniorTimeAxios,
};

export const useSeniorTimeQuery = (seniorId: number) => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY_PRIMISE_DETAIL.getSeniorTimeAxios, seniorId],
    queryFn: () => getSeniorTimeAxios(seniorId),
  });

  return { data, isSuccess, isLoading, isError };
};
