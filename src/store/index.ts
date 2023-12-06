import { configureStore } from '@reduxjs/toolkit';
import { filterGenresReducer} from './reducer';
import { createAPI } from '../services/api';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    filterGenres: filterGenresReducer,
    // authorisation: authorisationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
