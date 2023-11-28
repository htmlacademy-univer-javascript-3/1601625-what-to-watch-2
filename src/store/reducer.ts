import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/types';
import { updateGenre, showFilmcardList } from './action';
import { GenresEnum } from '../consts';

const initialState: InitialState = {
  genre: GenresEnum.AllGenres,
  filmCardList: [],
};

export const filterGenresReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(showFilmcardList, (state, action) => {
      state.filmCardList = action.payload;
    });
});
