import { authAxios, axios } from '@utils/apis';

export const presignedUrlAxios = () => {
  return authAxios.get('/v1/image/profile');
};

export const uploadProfileImageAxios = async (url: string, file: File) => {
  await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
};
