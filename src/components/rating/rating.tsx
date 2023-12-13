import RatingStar from '../rating-star/rating-star';
import { RatingProps } from '../../types/types';

function Rating({ setRating }: RatingProps) {
  const ratingStarsArr = Array.from({length: 10}, (_, idx) => (10 - idx));

  return (
    <div className="rating">
      <div className="rating__stars">
        {
          ratingStarsArr.map((i) => (
            <RatingStar
              key={`star-${String(i)}`}
              id={String(i)}
              setRating={setRating}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Rating;
