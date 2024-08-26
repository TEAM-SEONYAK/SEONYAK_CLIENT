import { useQuery } from '@tanstack/react-query';
import onboardingKeys from '../queryKeys';
import axios from 'axios';

const useSearchUnivQuery = (univName: string) => {
  const { data } = useQuery({
    queryKey: onboardingKeys.searchUniv(univName),
    queryFn: ({ queryKey }) => axios.get(queryKey[0]),
  });
  return data?.data.data.univSearchResult;
};

export default useSearchUnivQuery;
