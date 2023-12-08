import { configureStore } from '@reduxjs/toolkit';
import { filterGenresReducer, promoFilmReducer, userReducer} from './reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    filterGenres: filterGenresReducer,
    promo: promoFilmReducer,
    authorisation: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
