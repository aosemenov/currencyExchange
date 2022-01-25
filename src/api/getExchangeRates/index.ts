import { IExchangeRatesResponse } from "../../store/types";

export type IRequestData = {
    app_id?: string,
    currentDate: string,
    symbols?: string,
    base?: string,
}

export type IResponseData = IExchangeRatesResponse

export { getExchangeRates } from './getExchangeRates';