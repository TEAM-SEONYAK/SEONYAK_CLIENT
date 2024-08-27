import { useQuery } from '@tanstack/react-query';
import paths from '../queryKeys';
import axios from 'axios';

const useSearchDeptQuery = (univName: string, deptName: string) => {
  const { data } = useQuery({
    queryKey: [paths.searchDept, univName, deptName],
    queryFn: ({ queryKey }) =>
      axios.get(queryKey[0], {
        params: {
          univName,
          deptName,
        },
      }),
  });
  return data?.data.data;
};

export default useSearchDeptQuery;
