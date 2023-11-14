import FilmTabReviewsCol from '../film-tab-reviews-col/film-tab-reviews-col';
import { getHalfArrayFunction, FilmReviews, FilmTabReviewsProps } from '../../types/types';

function FilmTabReviews({reviewsInfo}:FilmTabReviewsProps){
  const getHalfArray:getHalfArrayFunction<FilmReviews> = (arr:FilmReviews[]) => (
    Math.round(arr.length / 2) - 1
  );

  const REVIEWS_COL = getHalfArray(reviewsInfo);

  return (
    <div className="film-card__reviews film-card__row">
      <FilmTabReviewsCol list={reviewsInfo.filter((_, idx) => idx <= REVIEWS_COL)} />
      <FilmTabReviewsCol list={reviewsInfo.filter((_, idx) => idx > REVIEWS_COL)} />
    </div>
  );
}

export default FilmTabReviews;
