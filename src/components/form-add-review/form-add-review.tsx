import { useState } from 'react';
import Rating from '../rating/rating';
import FormAddReviewMessage from '../form-add-review-message/form-add-review-message';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendCommentAction } from '../../store/api-actions';
import { ReviewConsts } from '../../consts';

function FormAddReview() {
  const dispatch = useAppDispatch();
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const {id} = useAppSelector((state) => state.filmPage.film);

  const handlerFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (reviewText.length >= ReviewConsts.MinLength && reviewText.length <= ReviewConsts.MaxLength && rating > 0) {
      setIsError(false);
      setError('');
      dispatch(sendCommentAction({id, comment: reviewText, rating}));
    } else if (reviewText.length < ReviewConsts.MinLength) {
      setIsError(true);
      setError('Please enter a comment of at least 50 characters!');
    } else if (reviewText.length > ReviewConsts.MaxLength) {
      setIsError(true);
      setError('Please enter a comment of no more than 400 characters!');
    } else if (rating === 0) {
      setIsError(true);
      setError('The rating cannot be 0!');
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handlerFormSubmit}>
      <Rating setRating={setRating} />
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(e) => setReviewText(e.target.value)}
          value={reviewText}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>

      {isError && <FormAddReviewMessage message={isError && error} />}
    </form>
  );
}


export default FormAddReview;
