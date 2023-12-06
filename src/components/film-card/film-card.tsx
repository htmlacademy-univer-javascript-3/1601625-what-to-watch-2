import { Link } from 'react-router-dom';
import { FilmCardStateProps } from '../../types/types';
import VideoPlayer from '../video-player/video-player';
import { VIDEO_TIMEOUT } from '../../consts';

function FilmCard({id, previewImage, name, active, setActiveCardId, previewVideoLink}: FilmCardStateProps){
  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCardId(id)}
      onMouseLeave={() => setActiveCardId(null)}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          active={active}
          src={previewVideoLink}
          img={previewImage}
          filmTitle={name}
          videoTimeout={VIDEO_TIMEOUT}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
