import { AxiosRequestConfig } from 'axios'
import { IRequestData, IResponseData } from '.'
import { api, IResponse } from '..'

export const getExchangeRates = async ({
  currentDate
}: IRequestData ): Promise<IResponse<IResponseData>> => {

  const requestConfig: AxiosRequestConfig = {
    method: 'GET',
    url: `https://openexchangerates.org/api/historical/${currentDate}.json?app_id=c82e6db780494b85b8e066641e76dd06&base=USD`,
    headers: {}
  }

  const response = await api.request<IResponse<IResponseData>>(requestConfig)
  return response.data
}
