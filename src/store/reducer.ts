import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import {
  loadFilm,
  loadComments,
  loadSimilarFlms,
  sendComment,
  setPagePath
} from './action';

const initialState: InitialState = {
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


