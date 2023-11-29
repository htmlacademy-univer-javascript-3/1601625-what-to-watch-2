import { Link } from 'react-router-dom';
import { FilmCardStateProps } from '../../types/types';
import VideoPlayer from '../video-player/video-player';
import { VIDEO_TIMEOUT } from '../../consts';

function FilmCard({id, filmTitle, img, active, setActiveCardId, videoLink}: FilmCardStateProps){
  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCardId(id)}
      onMouseLeave={() => setActiveCardId(null)}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          active={active}
          src={videoLink}
          img={img}
          filmTitle={filmTitle}
          videoTimeout={VIDEO_TIMEOUT}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{filmTitle}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
