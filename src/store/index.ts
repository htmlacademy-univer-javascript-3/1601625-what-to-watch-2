import { configureStore } from '@reduxjs/toolkit';
import {
  filterGenresReducer,
  promoFilmReducer,
  userReducer,
  filmPageReducer,
  mainReducer
} from './reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    filterGenres: filterGenresReducer,
    promo: promoFilmReducer,
    authorisation: userReducer,
    filmPage: filmPageReducer,
    main: mainReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
