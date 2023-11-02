import RatingStar from '../rating-star/rating-star';

function RatingStars() {
  const ratingStarsArr = Array.from({length: 10}, (item, idx) => (length - idx));

  return (
    <div className="rating__stars">
      {
        ratingStarsArr.map((item, idx) => (
          <RatingStar key={`star-${String(idx)}`} id={String(idx)} />
        ))
      }
    </div>
  );
}

export default RatingStars;
