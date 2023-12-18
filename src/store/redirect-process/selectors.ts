import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';

export const getPagePath = (state: Pick<State, SliceNameSpace.Redirect>): string => state[SliceNameSpace.Redirect].pagePath;
