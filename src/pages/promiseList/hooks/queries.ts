import { useQuery } from '@tanstack/react-query';
import { getGoogleMeetLink } from '../apis/getGoogleMeetLink';

export const QUERY_KEY_PROMISE_DETAIL = {
  getGoogleMeetLink: getGoogleMeetLink,
};

export const useGetGoogleMeetLink = (appointmentId: number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_PROMISE_DETAIL.getGoogleMeetLink, appointmentId],
    queryFn: () => getGoogleMeetLink(appointmentId),
  });
  const googleMeetLink = data?.data;

  return { googleMeetLink };
};
