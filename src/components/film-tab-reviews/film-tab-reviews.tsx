import FilmTabReviewsCol from '../film-tab-reviews-col/film-tab-reviews-col';
import { FilmTabReviewsProps } from '../../types/types';
import { getHalfArray } from '../../utils/getHalfArray';

function FilmTabReviews({reviewsInfo}:FilmTabReviewsProps){
  const rewiewsCol = getHalfArray(reviewsInfo);

  return (
    <div className="film-card__reviews film-card__row">
      <FilmTabReviewsCol list={reviewsInfo.filter((_, idx) => idx <= rewiewsCol)} />
      <FilmTabReviewsCol list={reviewsInfo.filter((_, idx) => idx > rewiewsCol)} />
    </div>
  );
}

export default FilmTabReviews;
