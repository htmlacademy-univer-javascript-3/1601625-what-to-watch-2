import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import { setPagePath } from './action';

const initialState: InitialState = {
  pagePath: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setPagePath, (state, action) => {
      state.pagePath = action.payload;
    });
});


