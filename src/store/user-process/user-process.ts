import { createSlice } from '@reduxjs/toolkit';
import { SliceNameSpace, AuthorisationStatus } from '../../consts';
import { UserProcess } from '../../types/state';
import { loginAction, logoutAction, verifyToken } from '../api-actions';
import { getToken } from '../../services/token';

const token = getToken();

const initialState: UserProcess = {
  authorisationStatus: token ? AuthorisationStatus.Unknown : AuthorisationStatus.NoAuth,
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
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorisationStatus = AuthorisationStatus.Auth;
        state.user = action.payload;
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
      })
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.authorisationStatus = AuthorisationStatus.Auth;
        state.user = action.payload;
      });
  },
});
