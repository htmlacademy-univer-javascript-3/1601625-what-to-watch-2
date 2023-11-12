import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import {PropsList, FilmCardProps} from '../../types/types';
import { VIDEO_LINK } from '../../mocks/films';

function FilmsList({list}: PropsList<FilmCardProps>){
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <>
      {list.map(({id, filmTitle, img}) => (
        <FilmCard
          key={id}
          id={id}
          filmTitle={filmTitle}
          img={img}
          active={activeCardId === id}

          setActiveCardId={setActiveCardId}
          videoLink={VIDEO_LINK}
        />
      ))}
    </>
  );
}

export default FilmsList;
