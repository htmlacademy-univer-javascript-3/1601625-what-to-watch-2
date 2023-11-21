import { RatingDescription } from '../consts';
import { GetRatingDescriptionFunction } from '../types/types';

export const getRatingDescription:GetRatingDescriptionFunction = (rating:number) => {
  if (rating >= 1 && rating < 4){
    return RatingDescription.Bad;
  } else if (rating >= 4 && rating < 6){
    return RatingDescription.Normal;
  } else if (rating >= 6 && rating < 7.5) {
    return RatingDescription.Good;
  } else if (rating >= 7.5 && rating < 9) {
    return RatingDescription.VeryGood;
  } else if (rating >= 9 && rating <= 10){
    return RatingDescription.Awesome;
  } else {
    return '';
  }
};
