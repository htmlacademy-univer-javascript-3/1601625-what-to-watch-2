import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';
import { AuthorisationStatus } from '../../consts';
import { UserData } from '../../types/types';

export const getAuthStatus = (state: State): AuthorisationStatus => state[SliceNameSpace.User].authorisationStatus;

export const getUserInfo = (state: State): UserData => state[SliceNameSpace.User].user;
