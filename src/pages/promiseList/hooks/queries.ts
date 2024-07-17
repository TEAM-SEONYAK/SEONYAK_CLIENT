import { useQuery } from '@tanstack/react-query';
import { getPromiseList } from '../apis/getPromiseList';

export const QUERY_KEY_PROMISE_DETAIL = {
  getPromiseList: getPromiseList,
};

export const useGetPromiseList = () => {
  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEY_PROMISE_DETAIL.getPromiseList],
    queryFn: () => getPromiseList(),
  });

  console.log(data);
  return { data, isSuccess };
};
