import { AxiosRequestConfig } from 'axios'
import { IResponseData } from '.'
import { api, IResponse } from '..'

export const getExchangeRates = async (): Promise<IResponse<IResponseData>> => {

  const requestConfig: AxiosRequestConfig = {
    method: 'GET',
    url: `https://openexchangerates.org/api/historical/2022-01-23.json?app_id=c82e6db780494b85b8e066641e76dd06&base=USD`,
    headers: {}
  }

  const response = await api.request<IResponse<IResponseData>>(requestConfig)
  return response.data
}
