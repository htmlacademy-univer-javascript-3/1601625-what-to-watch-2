import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';
import { FilmCardProps, PromoFilm } from '../../types/types';

export const getFilmsInfo = (state: State): FilmCardProps[] => state[SliceNameSpace.Films].films;

export const getGenre = (state: State): string => state[SliceNameSpace.Films].genre;

export const getLoadingStatus = (state: State): boolean => state[SliceNameSpace.Films].isLoading;

export const getPromoFilm = (state: State): PromoFilm => state[SliceNameSpace.Films].promoFilm;
