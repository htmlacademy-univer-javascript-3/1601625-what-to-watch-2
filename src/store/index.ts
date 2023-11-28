import { configureStore } from '@reduxjs/toolkit';
import { filterGenresReducer } from './reducer';

export const store = configureStore({
  reducer: {
    filterGenres: filterGenresReducer,
  }
});
