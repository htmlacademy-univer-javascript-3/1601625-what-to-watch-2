import { FilmCardBgProps } from '../../types/types';

function FilmCardBg({img, filmTitle}:FilmCardBgProps){
  return (
    <div className="film-card__bg">
      <img src={img} alt={filmTitle} />
    </div>
  );
}

export default FilmCardBg;
