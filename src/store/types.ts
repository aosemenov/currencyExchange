export type IError = {
  code: IErrorCode,
  message?: string,
}

export enum IErrorCode {
  EXCEPTION = -2, // внутренняя ошибка
  UNKNOWN = -1, // неизвестная внутренняя ошибка
  REQUEST = 1,
  RESPONSE = 2,
  NO_ACCESS = 100,
  BAD_REQUEST_DATA = 101,
  NEED_FORCE = 102, // пользователь может повторить запрос с параметром isForced: true
  OPERATION_ERROR = 103, // ошибка при выполнении операции
  USER_ALREADY_REGISTERED = 104
}

export type IExchangeRatesItem = {
  [rate: string]: number
}

export type IExchangeRates = {
  app_id: string,
  base: string,
  symbols: string,
  rates: {
    [date: string]: IExchangeRatesItem[]
  }
}

export type IExchangeRatesResponse = {
  base: string,
  disclaimer: string,
  license: string, 
  timestamp: number,
  rates: {
    [date: string]: IExchangeRatesItem[]
  }
}

export type ICurrensies = {
  [rate: string]: string
}

export type ICurrensiesResponse = ICurrensies

export enum IFormSteps {
  FIRST = "SUM",
  SECOND = "BANK",
  THIRD = "CHECK"
}

export enum ICurrensiesCode {
  USD = "USD",
  RUB = "RUB",
  EUR = "EUR"
}

export type ICurrensiesInfo = {
  currencyfrom: string,
  currencyto: string,
  sum: string
}

export type IBankAccountInfo = {
  bank: string,
  bik: string,
  bankaccount: string,
}

export interface IData {
  currensiesInfo?: ICurrensiesInfo,
  bankAccountInfo?: IBankAccountInfo
}

export type IFormStepsItem = 'SUM' | 'BANK' | 'CHECK'
