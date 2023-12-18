import { createAction } from '@reduxjs/toolkit';
import {
  FilmCardProps,
  PromoFilm,
  LoadableFilm,
  LoadableComment,
} from '../types/types';
import { AppRoutes } from '../consts';

export const updateGenre = createAction<string>('films/updateGenre');

export const loadFilms = createAction<FilmCardProps[]>('films/loadFilms');

export const setloadingFilms = createAction<boolean>('films/setLoadingFilm');

export const loadPromoFilm = createAction<PromoFilm>('films/loadPromoFilm');

export const loadFilm = createAction<LoadableFilm>('film/filmData');

export const loadComments = createAction<LoadableComment[]>('film/comments');

export const loadSimilarFlms = createAction<FilmCardProps[]>('film/similarFilms');

export const sendComment = createAction<LoadableComment>('film/sendComment');

export const redirectToRoute = createAction<AppRoutes>('redirect/redirectToRoute');

export const setPagePath = createAction<AppRoutes>('redicrect/setPagePath');
