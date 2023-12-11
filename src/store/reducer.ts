import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import {
  updateGenre,
  loadFilms,
  setloadingFilms,
  loadPromoFilm,
  requireAuthorization,
  requireUser,
  loadFilm,
  loadComments,
  loadSimilarFlms,
  sendComment,
  setError
} from './action';
import { GenresEnum, AuthorisationStatus } from '../consts';

const initialState: InitialState = {
  genre: GenresEnum.AllGenres,
  films: [],
  authorisationStatus: AuthorisationStatus.Unknown,
  filmsLoadStatus: [],
  isLoading: false,
  promoFilm: {
    id: '',
    name: '',
    posterImage: '',
    backgroundImage: '',
    videoLink: '',
    genre: '',
    released: 0,
    isFavorite: false
  },
  user: {
    name: '',
    avatarUrl: '',
    email: '',
    token: ''
  },
  film: {
    id: '',
    name: '',
    posterImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [],
    runTime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  comments: [],
  similarFilms: [],
  error: null,
};

export const filterGenresReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase((setloadingFilms), (state, action) => {
      state.isLoading = action.payload;
    });
});

export const promoFilmReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorisationStatus = action.payload;
    })
    .addCase(requireUser, (state, action) => {
      state.user = action.payload;
    });
});

export const filmPageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadSimilarFlms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(sendComment, (state, action) => {
      state.comments.push(action.payload);
    });
});

export const mainReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});


