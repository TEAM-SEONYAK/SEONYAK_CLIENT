import { seniorCardAxios } from "@pages/seniorProfile/apis/seniorCardAxios"
import { useQuery } from "@tanstack/react-query"

export const useSeniorCardQuery = (seniorId: string) => {
  return useQuery({
    queryKey: ['seniorCard', seniorId],
    queryFn: () => seniorCardAxios(seniorId),
  })
};
