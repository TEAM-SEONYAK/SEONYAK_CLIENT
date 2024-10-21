import { authAxios } from "@utils/apis"

export const getSeniorProfileAxios = (seniorId: string) => {
  return authAxios.get(
    `/v1/senior/${seniorId}`
  )
}