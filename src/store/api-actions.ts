import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { FilmCardProps, PromoFilm } from '../types/types';
import { APIRoute } from '../consts';
import { loadFilms, loadPromoFilm, setloadingFilms } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setloadingFilms(true));
    const {data} = await api.get<FilmCardProps[]>(APIRoute.Films);
    dispatch(setloadingFilms(false));
    dispatch(loadFilms(data));
  }
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchPromoFilm',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<PromoFilm>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  }
);

