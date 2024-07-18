import { authAxios } from '@utils/apis';

const presignedUrlAxios = () => {
  return authAxios.get('/v1/image');
};

export default presignedUrlAxios;
