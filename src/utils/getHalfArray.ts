import { GetHalfArrayFunction, FilmReviews } from '../types/types';

export const getHalfArray:GetHalfArrayFunction<FilmReviews> = (arr:FilmReviews[]) => (
  Math.round(arr.length / 2) - 1
);
