import { SliceNameSpace } from '../../consts';
import { State } from '../../types/state';
import { FilmCardProps, PromoFilm } from '../../types/types';

export const getFilmsInfo = (state: Pick<State, SliceNameSpace.Films>): FilmCardProps[] => state[SliceNameSpace.Films].films;

export const getGenre = (state: Pick<State, SliceNameSpace.Films>): string => state[SliceNameSpace.Films].genre;

export const getLoadingStatus = (state: Pick<State, SliceNameSpace.Films>): boolean => state[SliceNameSpace.Films].isLoading;

export const getPromoFilm = (state: Pick<State, SliceNameSpace.Films>): PromoFilm => state[SliceNameSpace.Films].promoFilm;
