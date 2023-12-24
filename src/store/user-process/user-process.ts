import { createSlice } from '@reduxjs/toolkit';
import { SliceNameSpace, AuthorisationStatus } from '../../consts';
import { UserProcess } from '../../types/state';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

const initialState: UserProcess = {
  authorisationStatus: AuthorisationStatus.Unknown,
  user: {
    name: '',
    avatarUrl: '',
    email: '',
    token: '',
  }
};

export const userProcess = createSlice({
  name: SliceNameSpace.User,
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorisationStatus = AuthorisationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorisationStatus = AuthorisationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorisationStatus = AuthorisationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorisationStatus = AuthorisationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorisationStatus = AuthorisationStatus.NoAuth;
        state.user = {
          name: '',
          avatarUrl: '',
          email: '',
          token: '',
        };
      });
  },
});
