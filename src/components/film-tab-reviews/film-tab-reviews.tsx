import FilmTabReviewsCol from '../film-tab-reviews-col/film-tab-reviews-col';
import { getHalfArrayFunction, FilmReviews, FilmTabReviewsProps } from '../../types/types';

function FilmTabReviews({reviewsInfo}:FilmTabReviewsProps){
  const getHalfArray:getHalfArrayFunction<FilmReviews> = (arr:FilmReviews[]) => (
    Math.round(arr.length / 2) - 1
  );

  const rewiewsCol = getHalfArray(reviewsInfo);

  return (
    <div className="film-card__reviews film-card__row">
      <FilmTabReviewsCol list={reviewsInfo.filter((_, idx) => idx <= rewiewsCol)} />
      <FilmTabReviewsCol list={reviewsInfo.filter((_, idx) => idx > rewiewsCol)} />
    </div>
  );
}

export default FilmTabReviews;
