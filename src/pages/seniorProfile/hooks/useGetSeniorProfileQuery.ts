import { getSeniorProfileAxios } from '@pages/seniorProfile/apis/getSeniorProfileAxios';
import { SeniorProfileAPIResType } from '@pages/seniorProfile/types';
import { useQuery } from '@tanstack/react-query';

export const useGetSeniorProfileQuery = (seniorId: string, isJuniorRequest: boolean) => {
  return useQuery<SeniorProfileAPIResType, Error>({
    queryKey: ['seniorProfile', seniorId],
    queryFn: () => getSeniorProfileAxios(seniorId).then((response) => response.data.data),
    enabled: !!isJuniorRequest,
  });
};
