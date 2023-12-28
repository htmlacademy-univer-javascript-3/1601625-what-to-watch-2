import { useNavigate, Link } from 'react-router-dom';
import { FilmCardStateProps } from '../../types/types';
import VideoPlayer from '../video-player/video-player';
import { VIDEO_TIMEOUT, FilmCardSize } from '../../consts';
import './film-card.css';

function FilmCard({id, previewImage, name, active, setActiveCardId, previewVideoLink}: FilmCardStateProps){
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/films/${id}`);
  };

  return(
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCardId(id)}
      onMouseLeave={() => setActiveCardId(null)}
    >
      <div data-testid='film-card' className="small-film-card__image small-film-card_hover" onClick={() => handlerClick()}>
        <VideoPlayer
          active={active}
          src={previewVideoLink}
          img={previewImage}
          filmTitle={name}
          videoTimeout={VIDEO_TIMEOUT}
          width={FilmCardSize.Width}
          height={FilmCardSize.Height}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
