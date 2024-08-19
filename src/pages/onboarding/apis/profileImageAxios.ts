import { authAxios, axios } from '@utils/apis';

// export const profileImgAxios = async (file: File) => {
//   try {
//     const formData = new FormData();
//     formData.append('profileImage', file);

//     const response = await authAxios.patch('/v1/profile-image', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const profileImageAxios = () => {
  return authAxios.get('/v1/image');
};

export const uploadProfileImageAxios = async (url: string, file: File) => {
  const response = await axios.put(url, file, {
    headers: {
      'Content-Type': file.type,
    },
  });
  console.log('🎂먀먀', response);
};
