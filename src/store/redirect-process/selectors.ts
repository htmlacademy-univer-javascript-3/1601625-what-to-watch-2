import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';

export const getPagePath = (state: State): string => state[SliceNameSpace.Redirect].pagePath;
