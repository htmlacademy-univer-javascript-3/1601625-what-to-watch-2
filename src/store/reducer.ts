import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import {
  updateGenre,
  loadFilms,
  setloadingFilms,
  loadPromoFilm,
  loadFilm,
  loadComments,
  loadSimilarFlms,
  sendComment,
  setPagePath
} from './action';
import { GenresEnum } from '../consts';

const initialState: InitialState = {
  genre: GenresEnum.AllGenres,
  films: [],
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
  pagePath: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase((setloadingFilms), (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    // .addCase(requireAuthorization, (state, action) => {
    //   state.authorisationStatus = action.payload;
    // })
    // .addCase(requireUser, (state, action) => {
    //   state.user = action.payload;
    // })
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
    })
    .addCase(setPagePath, (state, action) => {
      state.pagePath = action.payload;
    });
});


