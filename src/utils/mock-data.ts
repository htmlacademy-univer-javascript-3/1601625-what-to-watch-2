import * as faker from 'faker';
import { FilmCardProps, LoadableComment, LoadableFilm, UserData, PromoFilm } from '../types/types';

export const filmReview = (): LoadableComment => ({
  id: faker.datatype.uuid(),
  date: faker.datatype.datetime().toDateString(),
  user: faker.name.findName(),
  comment: faker.commerce.productDescription(),
  rating: faker.datatype.number({ max: 10 }),
});

export const generateFilmReviewArr = (arrayLength: number): LoadableComment[] => (
  Array.from({ length: arrayLength }, () => filmReview())
);

export const userInfo = (): UserData => ({
  name: faker.name.findName(),
  avatarUrl: faker.image.imageUrl(),
  email: faker.internet.email(),
  token: faker.datatype.string(),
});

export const filmInfo = (): LoadableFilm => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  posterImage: faker.image.imageUrl(),
  backgroundImage: faker.image.imageUrl(),
  backgroundColor: faker.internet.color(),
  videoLink: faker.internet.url(),
  description: faker.commerce.productDescription(),
  rating: faker.datatype.number({ max: 10 }),
  scoresCount: faker.datatype.number(),
  director: faker.name.findName(),
  starring: Array.from({ length: Math.random() * 10 + 1}, () => faker.name.findName()),
  runTime: faker.datatype.number(),
  genre: faker.music.genre(),
  released: faker.datatype.number(),
  isFavorite: faker.datatype.boolean(),
});

export const similarFilmInfo = (): FilmCardProps => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  previewVideoLink: faker.internet.url(),
  previewImage: faker.image.imageUrl(),
  genre: faker.music.genre(),

});

export const generateFilmsArray = (arrayLength: number): FilmCardProps[] => (
  Array.from({ length: arrayLength }, () => similarFilmInfo())
);

export const promoFilmInfo = (): PromoFilm => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  posterImage: faker.image.imageUrl(),
  backgroundImage: faker.image.imageUrl(),
  videoLink: faker.internet.url(),
  genre: faker.music.genre(),
  released: faker.datatype.number(),
  isFavorite: faker.datatype.boolean(),
});
