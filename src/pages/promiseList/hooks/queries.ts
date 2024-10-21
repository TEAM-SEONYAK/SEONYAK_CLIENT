import { useQuery } from '@tanstack/react-query';
import { getGoogleMeetLink } from '../apis/getGoogleMeetLink';
import { getPromiseList } from '../apis/getPromiseList';
import { useEffect } from 'react';

export const QUERY_KEY_PROMISE_LIST = {
  getGoogleMeetLink: 'getGoogleMeetLink',
  getPromiseList: 'getPromiseList',
};

export const useGetGoogleMeetLink = (
  appointmentId: number | undefined,
  isEnterBtnClicked: boolean,
  onSuccessCallback?: (link: string) => void,
) => {
  const { data, isSuccess, isError } = useQuery({
    queryKey: [QUERY_KEY_PROMISE_LIST.getGoogleMeetLink, appointmentId, isEnterBtnClicked],
    queryFn: () => getGoogleMeetLink(appointmentId as number),
    enabled: !!isEnterBtnClicked && appointmentId !== undefined,
  });

  useEffect(() => {
    if (isSuccess && data) {
      const googleMeetLink = data;
      if (onSuccessCallback && googleMeetLink) {
        onSuccessCallback(googleMeetLink);
      }
    }
  }, [isSuccess, data]);

  return { data, isSuccess, isError };
};

export const useGetPromiseList = () => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEY_PROMISE_LIST.getPromiseList],
    queryFn: getPromiseList,
  });

  const myNickname = data && data.myNickname;
  const pending = data && data.pending;
  const scheduled = data && data.scheduled;
  const past = data && data.past;

  return { myNickname, pending, scheduled, past, isSuccess, isLoading, isError };
};
