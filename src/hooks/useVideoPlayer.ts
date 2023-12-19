import { useEffect, useState } from 'react';
import { MAX_VIDEO_PLAYER_PROGRESS } from '../consts';

const useVideoPlayer = (videoPlayer: React.RefObject<HTMLVideoElement>) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    isFullscreen: false,
    time: 0,
  });

  const tooglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying
    });
  };

  useEffect(() => {
    if (videoPlayer.current){
      setPlayerState({
        ...playerState,
        time: videoPlayer.current.duration
      });
    }
  }, []);

  useEffect(() => {
    if (playerState.isPlaying) {
      videoPlayer.current?.play();
    } else {
      videoPlayer.current?.pause();
    }
  }, [playerState.isPlaying, videoPlayer]);

  const handlerOnTimeUpdate = () => {
    if (videoPlayer.current) {
      const progress = (videoPlayer.current.currentTime / videoPlayer.current.duration) * 100;
      const remainTime = videoPlayer.current.duration - videoPlayer.current.currentTime;

      setPlayerState({
        ...playerState,
        progress,
        time: remainTime
      });

      if (progress === MAX_VIDEO_PLAYER_PROGRESS) {
        setPlayerState({
          ...playerState,
          isPlaying: false
        });
      }
    }
  };

  const toogleFullscreen = () => {
    videoPlayer.current?.requestFullscreen();

    setPlayerState({
      ...playerState,
      isFullscreen: !playerState.isFullscreen
    });
  };

  return {
    playerState,
    tooglePlay,
    handlerOnTimeUpdate,
    toogleFullscreen
  };
};

export default useVideoPlayer;
