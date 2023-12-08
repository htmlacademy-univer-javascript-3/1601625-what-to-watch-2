import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { FilmCardProps, PromoFilm, UserData, AuthData } from '../types/types';
import { APIRoute, AuthorisationStatus } from '../consts';
import {
  loadFilms,
  loadPromoFilm,
  setloadingFilms,
  requireAuthorization,
  requireUser
} from './action';
import { saveToken, dropToken } from '../services/token';

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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorisationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorisationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ login, password }, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email: login,
      password
    });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorisationStatus.Auth));
    dispatch(requireUser(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorisationStatus.NoAuth));
  },
);


