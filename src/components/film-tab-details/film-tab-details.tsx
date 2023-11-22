import React from 'react';
import { FilmTabDetailsProps } from '../../types/types';

function FilmTabDetails({detailsInfo}:FilmTabDetailsProps){
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{detailsInfo.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              detailsInfo.starring
                .filter((_, idx) => idx < detailsInfo.starring.length - 1)
                .map((star) => <React.Fragment key={`details-starring${star}`}>{star},<br/></React.Fragment>)
            }
            {
              detailsInfo.starring
                .filter((_, idx) => idx === detailsInfo.starring.length - 1)
                .map((star) => <React.Fragment key={`details-starring${star}`}>{star}</React.Fragment>)
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{detailsInfo.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{detailsInfo.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{detailsInfo.realeased}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmTabDetails;
