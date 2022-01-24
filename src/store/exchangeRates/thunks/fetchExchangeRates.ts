import { actions } from "..";
import { getExchangeRates } from "../../../api/getExchangeRates";
import { AppThunk } from "../../../app/store";

import { IErrorCode } from "../../types";

export const fetchExchangeRates = (): AppThunk => async (dispatch) => {

    dispatch(actions.fetchStarted())
    try {
        const response = await getExchangeRates()
        if (!response) {
            dispatch(actions.fetchFailed({
                code: IErrorCode.RESPONSE,
                message: 'Некорректный ответ сервера',
            }))
            return
        }
        if (!response.success) {
            dispatch(actions.fetchFailed(response.error))
            return
        }
        dispatch(actions.fetchSuccess(response.data))
        return

    } catch (error) {
        dispatch(actions.fetchFailed({
            code: IErrorCode.REQUEST,
            message: 'Не удалось выполнить запрос'
        }));
    }
}