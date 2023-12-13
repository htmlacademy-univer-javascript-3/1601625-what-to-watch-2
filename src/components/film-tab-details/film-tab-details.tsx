import React from 'react';
import { useAppSelector } from '../../hooks';

function FilmTabDetails() {
  const film = useAppSelector((state) => state.film);

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{film.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {
              film.starring
                .filter((_, idx) => idx < film.starring.length - 1)
                .map((star) => <React.Fragment key={`details-starring${star}`}>{star},<br/></React.Fragment>)
            }
            {
              film.starring
                .filter((_, idx) => idx === film.starring.length - 1)
                .map((star) => <React.Fragment key={`details-starring${star}`}>{star}</React.Fragment>)
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{film.runTime}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{film.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmTabDetails;
