import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SliceNameSpace, GenresEnum } from '../../consts';
import { FilmsProcess } from '../../types/state';
import { fetchFilmsAction, fetchPromoFilmAction } from '../api-actions';

const initialState: FilmsProcess = {
  genre: GenresEnum.AllGenres,
  films: [],
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
};

export const filmsProcess = createSlice({
  name: SliceNameSpace.Films,
  initialState,
  reducers: {
    updateGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      });
  },
});

export const { updateGenre } = filmsProcess.actions;

