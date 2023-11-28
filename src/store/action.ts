import { createAction } from '@reduxjs/toolkit';
import { FilmCardProps } from '../types/types';

export const updateGenre = createAction<string>('main/updateGenre');

export const showFilmcardList = createAction<FilmCardProps[]>('main/showFilmcardList');
