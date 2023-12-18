import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import {
  FilmCardProps,
  PromoFilm,
  UserData,
  AuthData,
  LoadableFilm,
  LoadableComment,
  Comment
} from '../types/types';
import { APIRoute, AppRoutes } from '../consts';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<FilmCardProps[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'films/fetchFilms',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<FilmCardProps[]>(APIRoute.Films);
    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<PromoFilm, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'films/fetchPromoFilm',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<PromoFilm>(APIRoute.Promo);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { extra: api}) => {
    await api.get(APIRoute.Login);
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ login, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, {
      email: login,
      password
    });
    saveToken(data.token);
    return data;
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
    dispatch(redirectToRoute(AppRoutes.Main));
  },
);

export const fetchFilmAction = createAsyncThunk<LoadableFilm, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'film/fetchFilm',
  async (id, { extra: api }) => {
    const { data } = await api.get<LoadableFilm>(`${APIRoute.Films}/${id}`);
    return data;
  }
);

export const fetchComentsAction = createAsyncThunk<LoadableComment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'film/fetchComment',
  async (id, { extra: api }) => {
    const { data } = await api.get<LoadableComment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<FilmCardProps[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'film/fetchSimilarFilms',
  async (id, { extra: api }) => {
    const {data} = await api.get<FilmCardProps[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  }
);

export const sendCommentAction = createAsyncThunk<LoadableComment, Comment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'film/sendComment',
  async ({id, comment, rating}, { extra: api}) => {
    const { data } = await api.post<LoadableComment>(`${APIRoute.Comments}/${id}`, {
      comment,
      rating
    });

    return data;
  },
);
