import RatingStar from '../rating-star/rating-star';

function RatingStars() {
  const ratingStarsArr = Array.from({length: 10}, (_, idx) => (10 - idx));

  return (
    <div className="rating__stars">
      {
        ratingStarsArr.map((i) => (
          <RatingStar key={`star-${String(i)}`} id={String(i)} />
        ))
      }
    </div>
  );
}

export default RatingStars;
