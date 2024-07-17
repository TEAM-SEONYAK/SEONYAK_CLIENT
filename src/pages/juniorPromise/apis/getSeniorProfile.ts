import { AxiosError } from 'axios';
import { authAxios } from '@utils/apis';

interface SeniorProfile {
  seniorId: number;
  nickname: string;
  company: string;
  position: string;
  detailPosition: string;
  field: string;
  level: number;
}

interface GetSeniorProfileResponse {
  code: string;
  data: {
    seniorList: SeniorProfile[];
  };
}

export const getSeniorProfile = async (fields: string[], positions: string[]): Promise<GetSeniorProfileResponse> => {
  const fieldQuery = fields.map((field) => `field=${field}`).join('&');
  const positionQuery = positions.map((position) => `position=${position}`).join('&');
  const queryString = fieldQuery && positionQuery ? `${fieldQuery}&${positionQuery}` : `${fieldQuery}${positionQuery}`;
  console.log(queryString);
  try {
    const response = await authAxios.get<GetSeniorProfileResponse>(`/v1/senior/search?${queryString}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error.response?.data || new Error('An error occurred');
    }
    throw error;
  }
};
