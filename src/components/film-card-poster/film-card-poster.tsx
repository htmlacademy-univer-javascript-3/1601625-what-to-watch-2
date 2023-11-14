import { FilmCardPosterProps } from '../../types/types';

function FilmCardPoster({imgSrc, imgTitle, classes}:FilmCardPosterProps){
  return (
    <div className={`film-card__poster ${classes ? classes : ''}`}>
      <img src={`img/${imgSrc}`} alt={imgTitle} width="218" height="327" />
    </div>
  );
}

export default FilmCardPoster;
