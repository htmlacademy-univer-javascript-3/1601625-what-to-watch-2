import * as faker from 'faker';
import { LoadableComment } from '../types/types';

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
