import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppRoutes, MAX_VIDEO_PLAYER_PROGRESS } from '../../../consts';
import { useAppSelector } from '../../../hooks';
import { getFilmInfo } from '../../../store/film-process/selectors';
import { getPromoFilm } from '../../../store/films-process/selectors';
import { PromoFilm, LoadableFilm } from '../../../types/types';
import useVideoPlayer from '../../../hooks/useVideoPlayer';
import { changeVideoTimeFormat } from '../../../utils/changeVideoTimeFormat';

function Player(){
  const { id } = useParams();
  const navigate = useNavigate();
  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const film = useAppSelector(getFilmInfo);
  const promoFilm = useAppSelector(getPromoFilm);

  const [filmToPlay, setFilmToPlay] = useState<PromoFilm | LoadableFilm>(promoFilm);
  const { playerState, tooglePlay, handlerOnTimeUpdate, toogleFullscreen } = useVideoPlayer(videoPlayerRef);

  useEffect(() => {
    if (id === promoFilm.id){
      setFilmToPlay(promoFilm);
    } else if (id === film.id) {
      setFilmToPlay(film);
    } else {
      navigate(AppRoutes.NotFound);
    }
  }, [id, film, promoFilm]);

  return (
    <div className="player">
      <video
        className="player__video"
        ref={videoPlayerRef}
        src={filmToPlay.videoLink}
        poster={filmToPlay.backgroundImage}
        preload='metadata'
        onTimeUpdate={() => handlerOnTimeUpdate()}
        onClick={() => tooglePlay()}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => navigate(-1)}
      >
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={playerState.progress} max={MAX_VIDEO_PLAYER_PROGRESS}></progress>
            <div className="player__toggler" style={{left: `${playerState.progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            { playerState.isPlaying ? '-' : null }
            { playerState.time ? changeVideoTimeFormat(playerState.time) : '00:00'}
          </div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={() => tooglePlay()}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              {
                playerState.isPlaying
                  ? <use xlinkHref="#pause"></use>
                  : <use xlinkHref="#play-s"></use>
              }
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={() => toogleFullscreen()}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
