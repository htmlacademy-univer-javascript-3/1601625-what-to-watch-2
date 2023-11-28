import { FilmCardProps, PromoFilm } from '../types/types';
import { GenresEnum } from '../consts';

export const FILMS_INFO: FilmCardProps[] = [
  {
    id: '1FBTCoG',
    filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: GenresEnum.KidsAndFamily,
  },
  {
    id: '2BR',
    filmTitle: 'Bohemian Rhapsody',
    img: 'bohemian-rhapsody.jpg',
    genre: GenresEnum.Dramas,
  },
  {
    id: '3M',
    filmTitle: 'Macbeth',
    img: 'macbeth.jpg',
    genre: GenresEnum.SciFi,
  },
  {
    id: '4A',
    filmTitle: 'Aviator',
    img: 'aviator.jpg',
    genre: GenresEnum.Romance,
  },
  {
    id: '5WnttaK',
    filmTitle: 'We need to talk about Kevin',
    img: 'we-need-to-talk-about-kevin.jpg',
    genre: GenresEnum.Thrillers,
  },
  {
    id: '6WWDitS',
    filmTitle: 'What We Do in the Shadows',
    img: 'what-we-do-in-the-shadows.jpg',
    genre: GenresEnum.Comedies,
  },
  {
    id: '7R',
    filmTitle: 'Revenant',
    img: 'revenant.jpg',
    genre: GenresEnum.Thrillers,
  },
  {
    id: '8JE',
    filmTitle: 'Johnny English',
    img: 'johnny-english.jpg',
    genre: GenresEnum.Crime,
  },
  {
    id: '9SI',
    filmTitle: 'Shutter Island',
    img: 'shutter-island.jpg',
    genre: GenresEnum.Crime,
  },
  {
    id: '10PF',
    filmTitle: 'Pulp Fiction',
    img: 'pulp-fiction.jpg',
    genre: GenresEnum.Comedies,
  },
  {
    id: '11NCfOM',
    filmTitle: 'No Country for Old Men',
    img: 'no-country-for-old-men.jpg',
    genre: GenresEnum.Comedies,
  },
  {
    id: '12S',
    filmTitle: 'Snatc',
    img: 'snatch.jpg',
    genre: GenresEnum.SciFi,
  },
];

export const PROMO_FILM_DATA: PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
  poster: 'the-grand-budapest-hotel-poster.jpg',
  bgImg: 'bg-the-grand-budapest-hotel.jpg',
};

export const MY_LIST_FILMS:FilmCardProps[] = [
  {
    id: '1FBTCoG',
    filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
    img: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: GenresEnum.KidsAndFamily,
  },
  {
    id: '2BR',
    filmTitle: 'Bohemian Rhapsody',
    img: 'bohemian-rhapsody.jpg',
    genre: GenresEnum.Dramas,
  },
  {
    id: '3M',
    filmTitle: 'Macbeth',
    img: 'macbeth.jpg',
    genre: GenresEnum.SciFi,
  },
  {
    id: '4A',
    filmTitle: 'Aviator',
    img: 'aviator.jpg',
    genre: GenresEnum.Romance,
  },
  {
    id: '11NCfOM',
    filmTitle: 'No Country for Old Men',
    img: 'no-country-for-old-men.jpg',
    genre: GenresEnum.Comedies,
  },
  {
    id: '12S',
    filmTitle: 'Snatc',
    img: 'snatch.jpg',
    genre: GenresEnum.SciFi,
  },
];

export const VIDEO_LINK = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm';
