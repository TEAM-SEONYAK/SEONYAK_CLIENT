import { authAxios } from "@utils/apis"

export const seniorCardAxios = (seniorId: string) => {
  return authAxios.get(
    `/v1/senior/card/${seniorId}`
  )
}