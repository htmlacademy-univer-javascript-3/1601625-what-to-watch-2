export type FilmCardProps = {
  id: string | number;
  filmTitle: string;
  img: string;
}

export type PromoFilm = {
  title: string;
  genre: string;
  date: string | number;
}

export type MainPageProps = {
  title: string;
  genre: string;
  date: string | number;
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

export type PropsHeader = {
  linkLogo: string;
};

export type PropsFooter = PropsHeader;

export type PropsPoster = {
  path: string;
}
