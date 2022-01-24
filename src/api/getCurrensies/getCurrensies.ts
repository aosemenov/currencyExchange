import { AxiosRequestConfig } from 'axios'
import { IResponseData } from '.'
import { api, IResponse } from '..'

export const getCurrensies = async (): Promise<IResponse<IResponseData>> => {

  const requestConfig: AxiosRequestConfig = {
    method: 'GET',
    url: `https://openexchangerates.org/api/currencies.json`,
    headers: {}
  }

  const response = await api.request<IResponse<IResponseData>>(requestConfig)
  return response.data
}
