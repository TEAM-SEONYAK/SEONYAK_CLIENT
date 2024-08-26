import { AxiosError } from 'axios';
import { authAxios } from '@utils/apis';

interface seniorProfile {
  seniorId: number;
  nickname: string;
  company: string;
  image: string;
  position: string;
  detailPosition: string;
  field: string;
  level: number;
}

export interface GetSeniorProfileResponse {
  code: string;
  data: {
    myNickname: string;
    seniorList: seniorProfile[];
  };
}

export const getSeniorProfile = async (fields: string[], positions: string[]): Promise<GetSeniorProfileResponse> => {
  const fieldQuery = fields.map((field) => `field=${field}`).join('&');
  const positionQuery = positions.map((position) => `position=${position}`).join('&');
  const queryString = fieldQuery && positionQuery ? `${fieldQuery}&${positionQuery}` : `${fieldQuery}${positionQuery}`;
  try {
    const response = await authAxios.get<GetSeniorProfileResponse>(`/senior/search?${queryString}`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('An error occurred');
    }
    throw error;
  }
};
