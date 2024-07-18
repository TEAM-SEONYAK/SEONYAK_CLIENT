import { seniorCardAxios } from "@pages/seniorProfile/apis/seniorCardAxios"
import { SeniorCardType } from "@pages/seniorProfile/types";
import { useQuery } from "@tanstack/react-query"

export const useSeniorCardQuery = (seniorId: string) => {
  return useQuery<SeniorCardType, Error>({
    queryKey: ['seniorCard', seniorId],
    queryFn: () => seniorCardAxios(seniorId).then(response => response.data.data),
  })
};
