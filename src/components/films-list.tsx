import FilmCard from './film-card/film-card';
import {PropsList, FilmCardProps} from '../types/types';

function FilmsList({list}: PropsList<FilmCardProps>){
  return (
    <>
      {list.map(({id, filmTitle, img}) => (
        <FilmCard
          key={id}
          id={id}
          filmTitle={filmTitle}
          img={img}
        />
      ))}
    </>
  );
}

export default FilmsList;
