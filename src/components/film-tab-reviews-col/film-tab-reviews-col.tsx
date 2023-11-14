import { PropsList, FilmReviews } from '../../types/types';

function FilmTabReviewsCol({ list }:PropsList<FilmReviews>){
  return (
    <div className="film-card__reviews-col">
      {list.map((review) => (
        <div className="review" key={review.id}>
          <blockquote className="review__quote">
            <p className="review__text">{review.text}</p>

            <footer className="review__details">
              <cite className="review__author">{review.author}</cite>
              <time className="review__date" dateTime={review.date}>{review.date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{review.rating}</div>
        </div>
      ))}
    </div>
  );
}

export default FilmTabReviewsCol;
