import { FilmCardBgProps } from '../../types/types';

function FilmCardBg({img, filmTitle}:FilmCardBgProps){
  return (
    <div className="film-card__bg">
      <img src={`img/${img}`} alt={filmTitle} />
    </div>
  );
}

export default FilmCardBg;
