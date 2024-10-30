import { authAxios, axios } from '@utils/apis';

export const presignedUrlAxios = () => {
  return authAxios.get('/v1/image/businesscard');
};

export const uploadBusinessCardAxios = async (url: string, file: File) => {
  await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
};
