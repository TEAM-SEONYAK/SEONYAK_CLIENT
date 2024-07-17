import { useQuery } from '@tanstack/react-query';
import { getGoogleMeetLink } from '../apis/getGoogleMeetLink';
import { useEffect } from 'react';

export const QUERY_KEY_PROMISE_DETAIL = {
  getGoogleMeetLink: getGoogleMeetLink,
};

export const useGetGoogleMeetLink = (
  appointmentId: number,
  isEnterBtnClicked: boolean,
  onSuccessCallback?: (link: string) => void,
) => {
  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEY_PROMISE_DETAIL.getGoogleMeetLink, appointmentId, isEnterBtnClicked],
    queryFn: () => getGoogleMeetLink(appointmentId),
    enabled: !!isEnterBtnClicked,
  });

  useEffect(() => {
    if (isSuccess && data) {
      const googleMeetLink = data;
      if (onSuccessCallback && googleMeetLink) {
        onSuccessCallback(googleMeetLink);
      }
    }
  }, [isSuccess, data]);

  console.log(data);

  return { data, isSuccess };
};
