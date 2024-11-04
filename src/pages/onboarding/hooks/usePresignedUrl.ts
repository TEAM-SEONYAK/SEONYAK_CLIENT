import { useQuery } from '@tanstack/react-query';
import { profileUrlAxios } from '../apis/profileImageAxios';
import { businessCardUrlAxios } from '../apis/businesscardAxios';

export const useProfilePresignedUrl = () => {
  const { data } = useQuery({
    queryKey: ['profile-url'],
    queryFn: profileUrlAxios,
  });
  return { res: data?.data?.data };
};

export const useBusinessCardPresignedUrl = () => {
  const { data } = useQuery({
    queryKey: ['businesscard-url'],
    queryFn: businessCardUrlAxios,
  });
  return { res: data?.data?.data };
};