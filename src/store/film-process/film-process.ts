import { createSlice } from '@reduxjs/toolkit';
import { SliceNameSpace, AppRoutes } from '../../consts';
import { FilmProcess } from '../../types/types';
import { fetchFilmAction, fetchComentsAction, fetchSimilarFilmsAction, sendCommentAction } from '../api-actions';
import { redirectToRoute } from '../action';

const initialState: FilmProcess = {
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
};

export const filmProcess = createSlice({
  name: SliceNameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchFilmAction.rejected, () => {
        redirectToRoute(AppRoutes.NotFound);
      })
      .addCase(fetchComentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(sendCommentAction.fulfilled, (state, action) => {
        state.comments.push(action.payload);
      });
  },
});
