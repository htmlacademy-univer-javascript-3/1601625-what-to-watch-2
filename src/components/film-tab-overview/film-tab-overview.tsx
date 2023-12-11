import React from 'react';
import { getRatingDescription } from '../../utils/getRatingDescription';
import { useAppSelector } from '../../hooks';

function FilmTabOverview(){
  const film = useAppSelector((state) => state.filmPage.film);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{(film.rating).toFixed(1).replace('.', ',')}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingDescription(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>{`Director: ${film.director}`}</strong></p>
        <p className="film-card__starring">
          <strong>
            Starring:
            {
              film.starring
                .filter((_, idx) => idx < film.starring.length - 1)
                .map((fio) => <React.Fragment key={fio}> {fio},</React.Fragment>)
            }
            {
              film.starring
                .filter((_, idx) => idx === film.starring.length - 1)
                .map((fio) => <React.Fragment key={fio}> {fio}</React.Fragment>)
            }
          </strong>
        </p>
      </div>
    </>
  );
}

export default FilmTabOverview;
