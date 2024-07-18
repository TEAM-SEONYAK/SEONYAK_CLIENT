import { useQuery } from '@tanstack/react-query';
import { getPromiseDetail } from '../apis/getPromiseDetail';

export const QUERY_KEY_PRIMISE_DETAIL = {
  getPromiseDetail: getPromiseDetail,
};

export const useGetPromiseDetail = (appointmentId: number) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [QUERY_KEY_PRIMISE_DETAIL.getPromiseDetail, appointmentId],
    queryFn: () => getPromiseDetail(appointmentId),
  });

  const appointmentStatus = data && data.appointmentStatus;
  const juniorInfo = data && data.juniorInfo;
  const seniorInfo = data && data.seniorInfo;
  const timeList1 = data && data.timeList[0];
  const timeList2 = data && data.timeList[1];
  const timeList3 = data && data.timeList[2];
  const topic = data && data.topic;
  const personalTopic = data && data.personalTopic;

  // console.log(
  //   appointmentStatus,
  //   juniorInfo,
  //   seniorInfo,
  //   timeList1,
  //   timeList2,
  //   timeList3,
  //   topic,
  //   personalTopic,
  //   isSuccess,
  //   isLoading,
  // );

  return {
    appointmentStatus,
    juniorInfo,
    seniorInfo,
    timeList1,
    timeList2,
    timeList3,
    topic,
    personalTopic,
    isSuccess,
    isLoading,
  };
};
