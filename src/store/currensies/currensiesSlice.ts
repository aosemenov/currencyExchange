import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IError, ICurrensiesResponse } from '../types';


export interface ICurrensiesState {
  isLoading: boolean,
  isLock: boolean,
  error: IError | undefined,
  payload: ICurrensiesResponse | undefined
}

const initialState: ICurrensiesState = {
  isLoading: false,
  error: undefined,
  isLock: true,
  payload: undefined
};

export const currensies = createSlice({
  name: 'currensies',
  initialState,
  reducers: {
    fetchStarted: (state) => {
      state.isLoading = true
      state.isLock = true
      state.error = undefined
    },

    fetchSuccess: (state, { payload }: PayloadAction<ICurrensiesResponse>) => {
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

export const actions = currensies.actions

export const reducer = currensies.reducer