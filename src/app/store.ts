import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { reducer as exchangeRates } from '../store/exchangeRates'
import {reducer as currensies } from '../store/currensies'

export const store = configureStore({
  reducer: {
    exchangeRates,
    currensies
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>