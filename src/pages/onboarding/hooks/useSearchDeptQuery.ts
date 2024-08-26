import { useQuery } from '@tanstack/react-query';
import { departmentAxios } from '../apis/searchAxios';
import onboardingKeys from '../queryKeys';

const useSearchDeptQuery = (univName: string, deptName: string) => {
  const { data } = useQuery({
    queryKey: onboardingKeys.searchDept(univName, deptName),
    queryFn: departmentAxios,
  });
  return data?.data.data;
};

export default useSearchDeptQuery;
