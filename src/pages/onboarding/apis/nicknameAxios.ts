import { axios } from "@utils/apis"

export const nicknameAxios = (nickname: string) => {
  return axios.post(
    '/api/v1/nickname',
    {
      nickname
    },
  )
};
