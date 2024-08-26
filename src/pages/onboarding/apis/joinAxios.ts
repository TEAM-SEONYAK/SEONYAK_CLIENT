import { authAxios } from '@utils/apis';
import { JoinPropType, JoinRequesetType } from '../type';
import onboardingKeys from '../queryKeys';

export const joinAxios = (requestBody: JoinPropType) => {
  const request: JoinRequesetType = {
    ...requestBody,
    image: 'https://example.com/business-card.jpg',
    isSubscribed: requestBody.isSubscribed[4],
  };
  return authAxios.patch(onboardingKeys.join[0], request);
};
