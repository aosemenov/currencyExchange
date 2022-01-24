import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IError, IExchangeRatesResponse } from '../types';


export interface IExchangeRatesState {
  isLoading: boolean,
  isLock: boolean,
  error: IError | undefined,
  payload: IExchangeRatesResponse | undefined
}

const initialState: IExchangeRatesState = {
  isLoading: false,
  error: undefined,
  isLock: true,
  payload: undefined
};

export const exchangeRates = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.isLoading = true
      state.isLock = true
      state.error = undefined
    },

    fetchSuccess: (state, { payload }: PayloadAction<IExchangeRatesResponse>) => {
      state.isLoading = false
      state.error = undefined
      state.isLock = false
      state.payload = payload
    },

    fetchFailed: (state, { payload }: PayloadAction<IError>) => {
      state.isLoading = false
      state.error = payload
      state.isLock = false
    },
  },
});

export const actions = exchangeRates.actions

export const reducer = exchangeRates.reducer
