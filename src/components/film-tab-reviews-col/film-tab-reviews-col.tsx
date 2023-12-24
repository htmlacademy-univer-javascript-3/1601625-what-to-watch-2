import { PropsList, LoadableComment } from '../../types/types';
import { changeDateFormat } from '../../utils/changeDateFormat/changeDateFormat';

function FilmTabReviewsCol({ list }: PropsList<LoadableComment>) {
  return (
    <div className="film-card__reviews-col">
      {list.map((comment) => (
        <div className="review" key={comment.id}>
          <blockquote className="review__quote">
            <p className="review__text">{comment.comment}</p>

            <footer className="review__details">
              <cite className="review__author">{comment.user}</cite>
              <time className="review__date" dateTime={changeDateFormat(comment.date)}>
                {changeDateFormat(comment.date)}
              </time>
            </footer>
          </blockquote>

          <div className="review__rating">
            {comment.rating.toFixed(1).replace('.', ',')}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilmTabReviewsCol;
