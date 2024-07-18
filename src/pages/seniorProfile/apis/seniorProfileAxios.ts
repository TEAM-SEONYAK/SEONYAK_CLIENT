import { seniorProfileAPIType } from "@pages/seniorProfile/types"
import { authAxios, axios } from "@utils/apis"

// export const seniorProfileAxios = ({ catchphrase, career, award, story, preferredTimeList }: seniorProfileAPIType) => {
//   return authAxios.patch(
//     '/v1/senior/profile',
//     {
//       catchphrase, career, award, story, preferredTimeList,
//     },
//   )
// }

export const seniorProfileAxios = ({ catchphrase, career, award, story, preferredTimeList }: seniorProfileAPIType) => {
  return axios.patch(
    '/v1/senior/profile',
    {
      catchphrase, career, award, story, preferredTimeList,
    },
    {
      headers: {
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MjEyNTY4MzMsImV4cCI6MTc4MTczNjgzMywibWVtYmVySWQiOjQ3fQ.3g0AGA6ZsLBIfSt7_M5ZKTaU1dncXM76M7RI-2TKSOROJHK6fRysM6gIQwymaSFmA0cmtCy9NOryJ-BG4C5wnQ'
      }
    }
  )
}