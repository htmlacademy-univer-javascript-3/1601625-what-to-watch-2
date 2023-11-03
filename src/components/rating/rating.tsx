import RatingStar from '../rating-star/rating-star';

function Rating() {
  const ratingStarsArr = Array.from({length: 10}, (_, idx) => (10 - idx));

  return (
    <div className="rating">
      <div className="rating__stars">
        {
          ratingStarsArr.map((i) => (
            <RatingStar key={`star-${String(i)}`} id={String(i)} />
          ))
        }
      </div>
    </div>
  );
}

export default Rating;
