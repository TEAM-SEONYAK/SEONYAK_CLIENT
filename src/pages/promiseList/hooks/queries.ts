import { useQuery } from '@tanstack/react-query';
import { getPromiseList } from '../apis/getPromiseList';

export const QUERY_KEY_PROMISE_DETAIL = {
  getPromiseList: getPromiseList,
};

export const useGetPromiseList = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [QUERY_KEY_PROMISE_DETAIL.getPromiseList],
    queryFn: getPromiseList,
  });

  const myNickname = data && data.myNickname;
  const pending = data && data.pending;
  const scheduled = data && data.scheduled;
  const past = data && data.past;

  return { myNickname, pending, scheduled, past, isSuccess, isLoading };
};
