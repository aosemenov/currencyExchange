import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IError, IErrorCode } from '../store/types'

const requestConfig: AxiosRequestConfig = {
  timeout: 10000,
  validateStatus: (status) => true,
}

export const api = axios.create(requestConfig)

if (process.env.NODE_ENV !== 'production') {
  api.interceptors.request.use(
    (request: AxiosRequestConfig): AxiosRequestConfig => {
      console.log('[api request]', request)
      return request;
    }
  )

  api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
      console.log('[api response]', response)

      if (response.status !== 200) {
        return {
          ...response,
          data: {
            success: false,
            error: {
              code: IErrorCode.RESPONSE,
              message: response.statusText
            }
          }
        }
      }
      return {
        ...response,
        data: {
          ...response,
          success: true
        }
      }
    }
  )
}

export type ISuccessResponse<T> = {
  success: true,
  data: T
}

export type IErrorResponse = {
  success: false,
  error: IError
}

export type IResponse<T> = ISuccessResponse<T> | IErrorResponse

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))