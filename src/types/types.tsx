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
  videoLink: string;
}

export type PromoFilm = {
  title: string;
  genre: string;
  year: string | number;
  poster: string;
  bgImg: string;
}

export type MainPageProps = PromoFilm & {
  filmsInfo: FilmCardProps[];
};

export type AppProps = MainPageProps & FilmTabsProps & {
  myList: FilmCardProps[];
  videoLink: string;
}

export type FilmReviews = {
  id: string | number;
  text: string;
  author: string;
  date: string;
  rating: string;
}

export type PropsList<T> = {
  list: T[];
}

export type FilmPageProps<T> = PropsList<T> & FilmTabsProps;

export type FilmTabsProps = FilmTabOverviewProps & FilmTabDetailsProps & FilmTabReviewsProps;

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

export type VideoPlayerProps = {
  active: boolean;
  src: string;
  img: string;
  filmTitle: string;
  videoTimeout: number;
  width?: string;
  height?: string;
}

export type AddActiveClassFunction = (idx: number, activeClass: string) => string;

export type TabsNavProps = {
  tabs: string[];
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  addActiveClass: AddActiveClassFunction;
}

export type FilmTabsContainerProps = FilmTabsProps & {
  activeTab: number;
}

export type GetHalfArrayFunction<T> = (arr:T[]) => number;

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
}

export type FilmCardDetails = {
  director: string;
  starring: string[];
  runTime: string;
  genre: string;
  realeased: string;
}

export type FilmTabOverviewProps = {
  overviewInfo: FilmCardOverview;
}

export type FilmTabDetailsProps = {
  detailsInfo: FilmCardDetails;
}

export type FilmTabReviewsProps = {
  reviewsInfo: FilmReviews[];
}

export type FilmCardDescProps = Omit<PromoFilm, 'poster' | 'bgImg'>

export type GetRatingDescriptionFunction = (rating:number) => string

export type NumberRatingScoreToStringFunc = (rating: number) => string


