import { SliceNameSpace, AuthorisationStatus } from '../../consts';
import { userInfo } from '../../utils/mock-data';
import { getAuthStatus, getUserInfo } from './selectors';

describe('UserProcess selectors', () => {
  const state = {
    [SliceNameSpace.User]: {
      authorisationStatus: AuthorisationStatus.Auth,
      user: userInfo(),
    }
  };

  it('should return authorization status from state', () => {
    const { authorisationStatus } = state[SliceNameSpace.User];
    expect(getAuthStatus(state)).toEqual(authorisationStatus);
  });

  it('should return user data from state', () => {
    const { user } = state[SliceNameSpace.User];
    expect(getUserInfo(state)).toEqual(user);
  });
});
