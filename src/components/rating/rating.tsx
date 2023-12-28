import RatingStar from '../rating-star/rating-star';
import { RatingProps } from '../../types/types';
import { NUM_RATING_STAR } from '../../consts';

function Rating({ setRating, isChecked, readOnly }: RatingProps) {
  const ratingStarsArr = Array.from({length: NUM_RATING_STAR}, (_, idx) => (NUM_RATING_STAR - idx));

  return (
    <div className="rating">
      <div className="rating__stars">
        {
          ratingStarsArr.map((i) => (
            <RatingStar
              key={`star-${String(i)}`}
              id={String(i)}
              setRating={setRating}
              isChecked={isChecked}
              readOnly={readOnly}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Rating;
