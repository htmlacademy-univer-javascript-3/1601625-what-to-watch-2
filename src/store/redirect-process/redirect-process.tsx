import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNameSpace } from '../../consts';
import { RedirectProcess } from '../../types/state';

const initialState: RedirectProcess = {
  pagePath: '',
};

export const redirectProcess = createSlice({
  name: SliceNameSpace.Redirect,
  initialState,
  reducers: {
    setPagePath: ((state, action: PayloadAction<string>) => {
      state.pagePath = action.payload;
    })
  },
});

export const { setPagePath } = redirectProcess.actions;
