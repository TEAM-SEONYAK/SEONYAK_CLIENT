import { useQuery } from '@tanstack/react-query';
import { univNameAxios } from '../apis/searchAxios';
import onboardingKeys from '../queryKeys';

const useSearchUnivQuery = (univName: string) => {
  const { data } = useQuery({ queryKey: onboardingKeys.searchUniv(univName), queryFn: univNameAxios });
  return data?.data.data.univSearchResult;
};

export default useSearchUnivQuery;
