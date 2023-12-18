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
import {
  loadFilms,
  loadPromoFilm,
  setloadingFilms,
  loadFilm,
  loadComments,
  loadSimilarFlms,
  sendComment,
  redirectToRoute
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

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchFilm',
  async (id, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<LoadableFilm>(`${APIRoute.Films}/${id}`);

      dispatch(loadFilm(data));
    } catch(error) {
      dispatch(redirectToRoute(AppRoutes.NotFound));
    }
  }
);

export const fetchComentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchComment',
  async (id, { dispatch, extra: api }) => {
    const {data} = await api.get<LoadableComment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchSimilarFilms',
  async (id, { dispatch, extra: api }) => {
    const {data} = await api.get<FilmCardProps[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFlms(data));
  }
);

export const sendCommentAction = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'film/sendComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    const { data } = await api.post<LoadableComment>(`${APIRoute.Comments}/${id}`, {
      comment,
      rating
    });

    dispatch(sendComment(data));
  },
);
