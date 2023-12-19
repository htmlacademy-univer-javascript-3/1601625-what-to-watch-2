import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';
import { FilmCardProps } from '../../types/types';

export const getCountFilmsInMyList = (state: Pick<State, SliceNameSpace.MyList>): number => state[SliceNameSpace.MyList].countFilmsInMyList;

export const getFilmsInMyList = (state: Pick<State, SliceNameSpace.MyList>): FilmCardProps[] => state[SliceNameSpace.MyList].filmsInMyList;

export const getLoadingState = (state: Pick<State, SliceNameSpace.MyList>): boolean => state[SliceNameSpace.MyList].isLoading;

