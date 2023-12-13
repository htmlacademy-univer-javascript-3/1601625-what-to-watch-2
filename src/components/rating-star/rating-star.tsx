import { RatingStarProps } from '../../types/types';

function RatingStar({id, setRating }:RatingStarProps) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${id}`}
        type="radio"
        name="rating"
        value={id}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <label
        className="rating__label"
        htmlFor={`star-${id}`}
      >
          Rating {id}
      </label>
    </>
  );
}

export default RatingStar;
