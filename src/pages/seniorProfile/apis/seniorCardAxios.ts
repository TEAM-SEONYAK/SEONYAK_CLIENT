import { testAuthAxios } from "@utils/apis"

export const seniorCardAxios = (seniorId: string) => {
  return testAuthAxios.get(
    `/v1/senior/card/${seniorId}`
  )
}