import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';
import { AuthorisationStatus } from '../../consts';
import { UserData } from '../../types/types';

export const getAuthStatus = (state: Pick<State, SliceNameSpace.User>): AuthorisationStatus => state[SliceNameSpace.User].authorisationStatus;

export const getUserInfo = (state: Pick<State, SliceNameSpace.User>): UserData => state[SliceNameSpace.User].user;
