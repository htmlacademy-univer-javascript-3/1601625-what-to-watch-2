import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import {PropsList, FilmCardProps} from '../../types/types';
import { VIDEO_LINK } from '../../mocks/films';
import { useAppSelector } from '../../hooks';
import { GenresEnum } from '../../consts';

function FilmsList({list}: PropsList<FilmCardProps>){
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const activeGenre = useAppSelector((state) => state.filterGenres.genre);

  return (
    activeGenre === GenresEnum.AllGenres
      ?
      <>
        { list.map(({id, filmTitle, img, genre}) => (
          <FilmCard
            key={id}
            id={id}
            filmTitle={filmTitle}
            img={img}
            active={activeCardId === id}
            genre={genre}

            setActiveCardId={setActiveCardId}
            videoLink={VIDEO_LINK}
          />
        ))}
      </>
      :
      <>
        { list.filter(({genre}) => genre === activeGenre).map(({id, filmTitle, img, genre}) => (
          <FilmCard
            key={id}
            id={id}
            filmTitle={filmTitle}
            img={img}
            active={activeCardId === id}
            genre={genre}

            setActiveCardId={setActiveCardId}
            videoLink={VIDEO_LINK}
          />
        ))}
      </>
  );
}

export default FilmsList;
