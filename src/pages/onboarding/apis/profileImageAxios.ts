import { authAxios, axios } from '@utils/apis';

export const profileUrlAxios = () => {
  return authAxios.get('/api/v1/image/profile');
};

export const uploadProfileImageAxios = async (url: string, file: File) => {
  await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
};
