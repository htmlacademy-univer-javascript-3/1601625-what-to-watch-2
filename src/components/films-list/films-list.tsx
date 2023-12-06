import { useState } from 'react';
import FilmCard from '../film-card/film-card';
import { PropsList, FilmCardProps } from '../../types/types';

function FilmsList({ list }: PropsList<FilmCardProps>) {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <>
      {
        list.map(({ id, name, previewImage, genre, previewVideoLink}) => (
          <FilmCard
            key={id}
            id={id}
            name={name}
            previewImage={previewImage}
            active={activeCardId === id}
            genre={genre}
            setActiveCardId={setActiveCardId}
            previewVideoLink={previewVideoLink}
          />
        ))
      }
    </>
  );
}

export default FilmsList;
