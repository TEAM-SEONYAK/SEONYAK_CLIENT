import { testAuthAxios } from "@utils/apis"

export const getSeniorProfileAxios = (seniorId: string) => {
  return testAuthAxios.get(
    `/v1/senior/${seniorId}`
  )
}