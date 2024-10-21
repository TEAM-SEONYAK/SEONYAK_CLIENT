import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getSeniorProfile, GetSeniorProfileResponse } from '@pages/juniorPromise/apis/getSeniorProfile';

const useSeniorProfileQueries = (selectedFields: string[], selectedPositions: string[]) => {
  const QUERY_KEY = {
    SENIOR_PROFILE: 'seniorProfile',
  };

  const { data, isLoading, isError } = useQuery<GetSeniorProfileResponse>({
    queryKey: [QUERY_KEY.SENIOR_PROFILE, selectedFields, selectedPositions],
    queryFn: () => getSeniorProfile(selectedFields, selectedPositions),
    placeholderData: keepPreviousData,
  });

  return { data, isLoading, isError };
};

export default useSeniorProfileQueries;
