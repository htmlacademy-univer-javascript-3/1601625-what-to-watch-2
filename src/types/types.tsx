import { ReactNode } from 'react';
import { AuthorisationStatus } from '../consts';

export type FilmCardProps = {
  id: string;
  filmTitle: string;
  img: string;
}

export type FilmCardStateProps = FilmCardProps & {
  active: boolean;
  setActiveCardId: React.Dispatch<React.SetStateAction<string | null>>;
}

export type PromoFilm = {
  title: string;
  genre: string;
  year: string | number;
}

export type MainPageProps = PromoFilm & {
  filmsInfo: FilmCardProps[];
};

export type FilmReviewsProps = {
  id: string | number;
  text: string;
  author: string;
  date: string;
  rating: string;
}

export type PropsList<T> = {
  list: T[];
};

export type HeaderProps = {
  linkLogo: string;
  children?: ReactNode;
  classes?: string;
};

export type PropsFooter = HeaderProps;

export type PosterProps = {
  path: string;
}

export type RatingStarProps = {
  id: string;
}

export type PlayerProps = {
  videoLink: string;
}

export type AddReviewProps = {
  filmInfo: FilmCardProps;
}

export type BreadcrumbsListProps = Omit<FilmCardProps, 'img'>

export type PrivateRouteProps = {
  authorizationStatus: AuthorisationStatus;
  children: JSX.Element;
}

export type FilmCardBgProps = Omit<FilmCardProps, 'id'>

