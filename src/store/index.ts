import { configureStore } from '@reduxjs/toolkit';
import { filterGenresReducer, promoFilmReducer} from './reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    filterGenres: filterGenresReducer,
    promo: promoFilmReducer,
    // authorisation: authorisationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
