import { AuthorisationStatus } from '../../consts';
import { userProcess } from './user-process';
import { userInfo, userAuthData } from '../../utils/mock-data';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

describe('UserProcess slice', () => {
  const emptyAction = { type: '' };
  const initialUser = {
    name: '',
    avatarUrl: '',
    email: '',
    token: '',
  };

  it('should return initial state with empty action', () => {
    const expectedState = {
      authorisationStatus: AuthorisationStatus.Auth,
      user: userInfo()
    };

    const result = userProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefind state', () => {
    const expectedState = {
      authorisationStatus: AuthorisationStatus.Unknown,
      user: initialUser
    };

    const result = userProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should update "authorisationStatus" to "Auth" in state with "checkAuthAction.fulfilled" action', () => {
    const initialState = {
      authorisationStatus: AuthorisationStatus.Unknown,
      user: initialUser
    };

    const expectedState = {
      authorisationStatus: AuthorisationStatus.Auth,
      user: initialUser
    };

    const result = userProcess.reducer(initialState, checkAuthAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('should update "authorisationStatus" to "NoAuth" in state with "checkAuthAction.rejected" action', () => {
    const initialState = {
      authorisationStatus: AuthorisationStatus.Auth,
      user: initialUser
    };

    const expectedState = {
      authorisationStatus: AuthorisationStatus.NoAuth,
      user: initialUser
    };

    const result = userProcess.reducer(initialState, checkAuthAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should update "user" info and "authorisationStatus" to "Auth" in state with "loginAction.fulfilled" action', () => {
    const user = userInfo();
    const authData = userAuthData();

    const initialState = {
      authorisationStatus: AuthorisationStatus.Unknown,
      user: initialUser
    };

    const expectedState = {
      authorisationStatus: AuthorisationStatus.Auth,
      user: user
    };

    const result = userProcess.reducer(initialState, loginAction.fulfilled(user, '', authData));
    expect(result).toEqual(expectedState);
  });

  it('should update "authorisationStatus" to "NoAuth" in state with "loginAction.rejected" action', () => {
    const initialState = {
      authorisationStatus: AuthorisationStatus.Unknown,
      user: initialUser
    };

    const expectedState = {
      authorisationStatus: AuthorisationStatus.NoAuth,
      user: initialUser
    };

    const result = userProcess.reducer(initialState, loginAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should update "authorisationStatus" to "NoAuth" in state with "logoutAction.fulfilled" action', () => {
    const user = userInfo();

    const initialState = {
      authorisationStatus: AuthorisationStatus.Auth,
      user: user
    };

    const expectedState = {
      authorisationStatus: AuthorisationStatus.NoAuth,
      user: initialUser
    };

    const result = userProcess.reducer(initialState, logoutAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

});
