import { useQuery } from '@tanstack/react-query';
import { departmentAxios } from '../apis/searchAxios';

const useSearchDeptQuery = (univName: string, deptName: string) => {
  const { data } = useQuery({
    queryKey: ['univ', univName, deptName],
    queryFn: () => departmentAxios(univName, deptName),
  });
  return data?.data.data;
};

export default useSearchDeptQuery;
