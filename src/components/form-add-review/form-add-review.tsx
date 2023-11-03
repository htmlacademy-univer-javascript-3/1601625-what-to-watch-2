import Rating from '../rating/rating';
import { useState } from 'react';

function FormAddReview() {
  const [reviewText, setReviewText] = useState('');

  return (
    <form action="#" className="add-review__form">
      <Rating />

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
    </form>
  );
}


export default FormAddReview;
