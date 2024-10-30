import { authAxios, axios } from '@utils/apis';

export const businessCardUrlAxios = () => {
  return authAxios.get('/api/v1/image/businesscard');
};

export const uploadBusinessCardAxios = async (url: string, file: File) => {
  await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
};
