import { seniorCardAxios } from "@pages/seniorProfile/apis/seniorCardAxios"
import { SeniorCardAPIResType } from "@pages/seniorProfile/types";
import { useQuery } from "@tanstack/react-query"

export const useSeniorCardQuery = (seniorId: string) => {
  return useQuery<SeniorCardAPIResType, Error>({
    queryKey: ['seniorCard', seniorId],
    queryFn: () => seniorCardAxios(seniorId).then(response => response.data.data),
  })
};
