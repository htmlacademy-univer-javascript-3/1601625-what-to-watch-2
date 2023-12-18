import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';
import { LoadableFilm, LoadableComment, FilmCardProps } from '../../types/types';

export const getFilmInfo = (state: State): LoadableFilm => state[SliceNameSpace.Film].film;

export const getComments = (state: State): LoadableComment[] => state[SliceNameSpace.Film].comments;

export const getSimilarFilms = (state: State): FilmCardProps[] => state[SliceNameSpace.Film].similarFilms;
