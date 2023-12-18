import FilmTabReviewsCol from '../film-tab-reviews-col/film-tab-reviews-col';
import { getHalfArray } from '../../utils/getHalfArray';
import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/film-process/selectors';

function FilmTabReviews(){
  const comments = useAppSelector(getComments);
  const commentsCol = getHalfArray(comments);

  return (
    <div className="film-card__reviews film-card__row">
      <FilmTabReviewsCol list={comments.filter((_, idx) => idx <= commentsCol)} />
      <FilmTabReviewsCol list={comments.filter((_, idx) => idx > commentsCol)} />
    </div>
  );
}

export default FilmTabReviews;
