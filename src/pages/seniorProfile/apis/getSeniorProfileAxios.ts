import { authAxios } from "@utils/apis"

export const getSeniorProfileAxios = (seniorId: string) => {
  return authAxios.get(
    `/api/v1/senior/${seniorId}`
  )
}