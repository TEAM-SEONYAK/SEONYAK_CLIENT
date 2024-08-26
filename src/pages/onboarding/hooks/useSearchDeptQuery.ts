import { useQuery } from '@tanstack/react-query';
import onboardingKeys from '../queryKeys';
import axios from 'axios';

const useSearchDeptQuery = (univName: string, deptName: string) => {
  const { data } = useQuery({
    queryKey: onboardingKeys.searchDept(univName, deptName),
    queryFn: ({ queryKey }) => axios.get(queryKey[0]),
  });
  return data?.data.data;
};

export default useSearchDeptQuery;
