import { PromoFilm } from '../../types/types';

function FilmCardDesc({title, genre, date}:PromoFilm){
  return (
    <>
      <h2 className="film-card__title">{title}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{date}</span>
      </p>
    </>
  );
}

export default FilmCardDesc;
