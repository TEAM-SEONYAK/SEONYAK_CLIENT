import { patchSeniorReject, patchSeniorRejectRequestType } from '../apis/patchSeniorReject';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { patchSeniorAccept, patchSeniorAcceptRequestType } from '../apis/patchSeniorPromiseAccept';
import { postGoogleMeetLink } from '../apis/postGoogleMeetLink';
import { getPromiseDetail } from '../apis/getPromiseDetail';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEY_PROMISE_LIST } from '@pages/promiseList/hooks/queries';

export const QUERY_KEY_PROMISE_DETAIL = {
  patchSeniorReject: patchSeniorReject,
  postGoogleMeetLink: postGoogleMeetLink,
  patchSeniorAccept: patchSeniorAccept,
  getPromiseDetail: getPromiseDetail,
};

// 선배 약속 거절
export const usePatchSeniorReject = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate, data } = useMutation({
    mutationKey: [QUERY_KEY_PROMISE_DETAIL.patchSeniorReject],
    mutationFn: ({ appointmentId, rejectReason, rejectDetail }: patchSeniorRejectRequestType) =>
      patchSeniorReject({ appointmentId, rejectReason, rejectDetail }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_PROMISE_LIST.getPromiseList] });
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onError: (error) => {
      console.log('Error in mutation:', error);
      navigate('/error');
    },
  });

  return { mutate, data };
};

// 구글밋 링크 받기
export const usePostGoogleMeetLink = (onSuccessCallback?: (data: string) => void) => {
  const { mutate, data, isPending } = useMutation({
    mutationKey: [QUERY_KEY_PROMISE_DETAIL.postGoogleMeetLink],
    mutationFn: postGoogleMeetLink,
    onSuccess: (data) => {
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },
  });

  return { mutate, data, isPending };
};

// 선배 약속 수락
export const usePatchSeniorAccept = (onSuccessCallback?: () => void) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, data, isPending } = useMutation({
    mutationKey: [QUERY_KEY_PROMISE_DETAIL.patchSeniorAccept],
    mutationFn: ({ appointmentId, googleMeetLink, timeList }: patchSeniorAcceptRequestType) =>
      patchSeniorAccept({ appointmentId, googleMeetLink, timeList }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_PROMISE_LIST.getPromiseList] });

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
    onError: (error) => {
      navigate('/error');
      console.error('Error in mutation:', error);
    },
  });

  return { mutate, data, isPending };
};

export const useGetPromiseDetail = (appointmentId: number) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [QUERY_KEY_PROMISE_DETAIL.getPromiseDetail, appointmentId],
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
