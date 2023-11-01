import { Link } from 'react-router-dom';
import { FilmCardProps } from '../../types/types';
import { AppRoutes } from '../../consts';

function FilmCard({filmTitle, img}: FilmCardProps){
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${img}`} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoutes.Film}>{filmTitle}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
