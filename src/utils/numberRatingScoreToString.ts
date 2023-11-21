import { NumberRatingScoreToStringFunc } from '../types/types';

export const numberRatingScoreToString:NumberRatingScoreToStringFunc = (rating:number) => (
  String(rating).replace('.', ',')
);

