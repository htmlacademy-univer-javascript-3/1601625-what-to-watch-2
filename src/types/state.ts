import { store } from '../store';
import { AuthorisationStatus } from '../consts';
import { UserData, FilmCardProps, PromoFilm, LoadableComment, LoadableFilm } from './types';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type RedirectProcess = {
  pagePath: string;
}

export type UserProcess = {
  authorisationStatus: AuthorisationStatus;
  user: UserData;
};

export type FilmsProcess = {
  genre: string;
  films: FilmCardProps[];
  isLoading: boolean;
  promoFilm: PromoFilm;
};

export type FilmProcess = {
  film: LoadableFilm;
  comments: LoadableComment[];
  similarFilms: FilmCardProps[];
};


