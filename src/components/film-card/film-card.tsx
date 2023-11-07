import { Link } from 'react-router-dom';
import { FilmCardStateProps } from '../../types/types';

function FilmCard({id, filmTitle, img, active, setActiveCardId}: FilmCardStateProps){
  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCardId(id)}
      onMouseDown={() => setActiveCardId(null)}
    >
      <div className="small-film-card__image">
        <img src={`img/${img}`} alt={filmTitle} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{filmTitle}</Link>
        {active ? '' : ''}
      </h3>
    </article>
  );
}

export default FilmCard;
