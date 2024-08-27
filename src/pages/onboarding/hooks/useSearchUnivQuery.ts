import { useQuery } from '@tanstack/react-query';
import paths from '../queryKeys';
import axios from 'axios';

const useSearchUnivQuery = (univName: string) => {
  const { data } = useQuery({
    queryKey: [paths.searchUniv, univName],
    queryFn: ({ queryKey }) =>
      axios.get(queryKey[0], {
        params: {
          univName,
        },
      }),
  });
  return data?.data.data.univSearchResult;
};

export default useSearchUnivQuery;
