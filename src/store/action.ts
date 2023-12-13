import { createAction } from '@reduxjs/toolkit';
import {
  FilmCardProps,
  PromoFilm,
  UserData,
  LoadableFilm,
  LoadableComment,
} from '../types/types';
import { AppRoutes, AuthorisationStatus } from '../consts';

export const updateGenre = createAction<string>('main/updateGenre');

export const loadFilms = createAction<FilmCardProps[]>('main/loadFilms');

export const requireAuthorization = createAction<AuthorisationStatus>('user/requireAuthorization');

export const setloadingFilms = createAction<boolean>('main/setLoadingFilm');

export const loadPromoFilm = createAction<PromoFilm>('main/loadPromoFilm');

export const requireUser = createAction<UserData>('user/requireUser');

export const loadFilm = createAction<LoadableFilm>('film/filmData');

export const loadComments = createAction<LoadableComment[]>('film/comments');

export const loadSimilarFlms = createAction<FilmCardProps[]>('film/similarFilms');

export const sendComment = createAction<LoadableComment>('film/sendComment');

export const redirectToRoute = createAction<AppRoutes>('main/redirectToRoute');

export const setPagePath = createAction<AppRoutes>('main/setPagePath');
