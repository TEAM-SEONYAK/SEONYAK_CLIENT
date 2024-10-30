import { authAxios } from "@utils/apis"

export const seniorCardAxios = (seniorId: string) => {
  return authAxios.get(
    `/api/v1/senior/card/${seniorId}`
  )
}