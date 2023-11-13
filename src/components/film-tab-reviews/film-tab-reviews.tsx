import { REVIEWS } from '../../mocks/reviews';
import FilmTabReviewsCol from '../film-tab-reviews-col/film-tab-reviews-col';
import { getHalfArrayFunction, FilmReviewsProps } from '../../types/types';

function FilmTabReviews(){
  const getHalfArray:getHalfArrayFunction<FilmReviewsProps> = (arr:FilmReviewsProps[]) => (
    Math.round(arr.length / 2) - 1
  );

  const REVIEWS_COL = getHalfArray(REVIEWS);

  return (
    <div className="film-card__reviews film-card__row">
      <FilmTabReviewsCol list={REVIEWS.filter((_, idx) => idx <= REVIEWS_COL)} />
      <FilmTabReviewsCol list={REVIEWS.filter((_, idx) => idx > REVIEWS_COL)} />
    </div>
  );
}

export default FilmTabReviews;
