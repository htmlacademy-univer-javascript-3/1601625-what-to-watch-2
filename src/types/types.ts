import { ReactNode } from 'react';
import type { BrowserHistory } from 'history';
import { AuthorisationStatus, GenresEnum } from '../consts';

export type FilmCardProps = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
};

export type FilmCardStateProps = FilmCardProps & {
  active: boolean;
  setActiveCardId: React.Dispatch<React.SetStateAction<string | null>>;
};

export type MainPageProps = PromoFilm;

export type AppProps = {
  videoLink: string;
};

export type FilmReviews = {
  id: string | number;
  text: string;
  author: string;
  date: string;
  rating: string;
};

export type PropsList<T> = {
  list: T[];
};

export type HeaderProps = {
  linkLogo: string;
  children?: ReactNode;
  classes?: string;
};

export type PropsFooter = HeaderProps;

export type FilmCardPosterProps = {
  imgSrc: string;
  imgTitle: string;
  classes?: string;
};

export type RatingStarProps = RatingProps & {
  id: string;
};

export type PlayerProps = {
  videoLink: string;
};

export type AddReviewProps = {
  filmInfo: FilmCardProps;
};

export type BreadcrumbsListProps = {
  id: string;
  filmTitle: string;
}

export type PrivateRouteProps = {
  children: JSX.Element;
};

export type FilmCardBgProps = {
  img: string;
  filmTitle: string;
};

export type VideoPlayerProps = {
  active: boolean;
  src: string;
  img: string;
  filmTitle: string;
  videoTimeout: number;
  width?: string;
  height?: string;
};

export type AddActiveClassFunc = (idx: number, activeClass: string) => string;

export type TabsNavProps = {
  tabs: string[];
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  addActiveClass: AddActiveClassFunc;
};

export type FilmTabsContainerProps = {
  activeTab: number;
};

export type GetHalfArrayFunc<T> = (arr:T[]) => number;

export type FilmCardOverview = {
  rating: {
    score: number;
    level: string;
    count: string;
  };
  text: {
    paragraphs: string[];
    director: string;
    starring: string;
  };
};

export type FilmCardDetails = {
  director: string;
  starring: string[];
  runTime: string;
  genre: string;
  realeased: string;
};

export type FilmCardDescProps = {
  title: string;
  genre: string;
  year: string | number;
};

export type GetRatingDescriptionFunc = (rating:number) => string;

export type GenreProps = {
  genre: GenresEnum;
  activeClass: string;
  setActiveGenre: React.Dispatch<React.SetStateAction<GenresEnum>>;
};

export type InitialState = {
  genre: string;
  films: FilmCardProps[];
  authorisationStatus: AuthorisationStatus;
  filmsLoadStatus: [];
  isLoading: boolean;
  promoFilm: PromoFilm;
  user: UserData;
  film: LoadableFilm;
  comments: LoadableComment[];
  similarFilms: FilmCardProps[];
  pagePath: string;
}

export type GetFilmsByGenreFunc = (list: FilmCardProps[]) => FilmCardProps[];

export type ShowMoreButtonProps = {
  onShowMoreClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type PromoFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type UserData = {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
};

export type AuthData = {
  login: string;
  password: string;
};

export type SignInFieldProps = {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  value: string;
  onChangeHandler: React.Dispatch<React.SetStateAction<string>>;
  htmlFor: string;
  label: string;
  errorClass: string;
};

export type checkEmailFunc = (email: string) => boolean;

export type checkPasswordFunc = (password: string) => boolean;

export type SignInErrorProps = {
  message: string;
};

export type LoadableFilm = {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type LoadableComment = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
};

export type Comment = {
  id: string;
  comment: string;
  rating: number;
}

export type RatingProps = {
  setRating: React.Dispatch<React.SetStateAction<number>>;
};

export type FormAddReviewMessageProps = {
  message: string | boolean;
};

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
}
