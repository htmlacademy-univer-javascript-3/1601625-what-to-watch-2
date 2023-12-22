import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';
import { LoadableFilm, LoadableComment, FilmCardProps } from '../../types/types';

export const getFilmInfo = (state: Pick<State, SliceNameSpace.Film>): LoadableFilm => state[SliceNameSpace.Film].film;

export const getComments = (state: Pick<State, SliceNameSpace.Film>): LoadableComment[] => state[SliceNameSpace.Film].comments;

export const getSimilarFilms = (state: Pick<State, SliceNameSpace.Film>): FilmCardProps[] => state[SliceNameSpace.Film].similarFilms;

export const getLoadingStatus = (state: Pick<State, SliceNameSpace.Film>): boolean => state[SliceNameSpace.Film].isLoading;

export const getError = (state: Pick<State, SliceNameSpace.Film>): string | undefined => state[SliceNameSpace.Film].error;
