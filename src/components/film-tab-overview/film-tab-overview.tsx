import { FilmTabOverviewProps } from '../../types/types';
import { getRatingDescription } from '../../utils/getRatingDescription';

function FilmTabOverview({overviewInfo}:FilmTabOverviewProps){
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{(overviewInfo.rating.score).toFixed(1).replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(overviewInfo.rating.score)}</span>
          <span className="film-rating__count">{overviewInfo.rating.count}</span>
        </p>
      </div>

      <div className="film-card__text">
        {
          overviewInfo.text.paragraphs.map((paragraph, idx) => {
            const i = idx;
            return <p key={`paragraph-${i}`}>{paragraph}</p>;
          })
        }
        <p className="film-card__director"><strong>{`Director: ${overviewInfo.text.director}`}</strong></p>
        <p className="film-card__starring"><strong>{`Starring: ${overviewInfo.text.starring}`}</strong></p>
      </div>
    </>
  );
}

export default FilmTabOverview;
