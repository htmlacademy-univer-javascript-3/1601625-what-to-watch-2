import { GetHalfArrayFunc, FilmReviews } from '../types/types';

export const getHalfArray:GetHalfArrayFunc<FilmReviews> = (arr:FilmReviews[]) => (
  Math.round(arr.length / 2) - 1
);
