import { useState, useEffect } from 'react';
import { FilmCardButtonMylistProps } from '../../types/types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getCountFilmsInMyList, getFilmsInMyList } from '../../store/my-list-process/selectors';
import { addFilmToFavoriteAction, removeFilmToFavoriteAction } from '../../store/api-actions';

function FilmCardButtonMylist({film}: FilmCardButtonMylistProps){
  const dispatch = useAppDispatch();
  const countFilmsInMyList = useAppSelector(getCountFilmsInMyList);
  const filmsInMyList = useAppSelector(getFilmsInMyList);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const findFilmInMyList = filmsInMyList.find((filmMyList) => film.id === filmMyList.id);

    if(findFilmInMyList){
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [film.id, filmsInMyList]);

  const handlerMyListBtnClick = () => {
    if (isFavorite === false) {
      if (film.id !== undefined) {
        dispatch(addFilmToFavoriteAction(film.id));
        setIsFavorite(true);
      }
    } else {
      dispatch(removeFilmToFavoriteAction(film.id));
      setIsFavorite(false);
    }
  };

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handlerMyListBtnClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        {
          isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>
        }
      </svg>
      <span>My list</span>
      <span className="film-card__count">{countFilmsInMyList}</span>
    </button>
  );
}

export default FilmCardButtonMylist;
