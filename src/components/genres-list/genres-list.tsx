import { useState, useEffect } from 'react';
import Genre from '../genre/genre';
import { GenresEnum } from '../../consts';
import { updateGenre } from '../../store/action';
import { useAppDispatch } from '../../hooks';

function GenresList(){
  const [activeGenre, setActiveGenre] = useState(GenresEnum.AllGenres);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateGenre(activeGenre));
  }, [dispatch, activeGenre]);

  return (
    <ul className="catalog__genres-list">
      {
        Object.values(GenresEnum).map((genre) => (
          <Genre
            key={genre}
            genre={genre}
            setActiveGenre={setActiveGenre}
            activeClass={activeGenre === genre ? 'catalog__genres-item--active' : ''}
          />
        ))
      }
    </ul>
  );
}

export default GenresList;
