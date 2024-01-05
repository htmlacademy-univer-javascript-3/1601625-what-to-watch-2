import { useEffect, useMemo, useState, useCallback } from 'react';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import Header from '../../header/header';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import FilmCardButtonPlay from '../../film-card-button-play/film-card-button-play';
import FilmCardButtonMylist from '../../film-card-button-mylist/film-card-button-mylist';
import FilmCardDesc from '../../film-card-desc/film-card-desc';
import GenresList from '../../genres-list/genres-list';
import MemoFilmsList from '../../films-list/films-list';
import ShowMoreButton from '../../show-more-button/show-more-button';
import Footer from '../../footer/footer';
import Spinner from '../../spinner/spinner';
import { GetFilmsByGenreFunc } from '../../../types/types';
import {
  GenresEnum,
  MAX_NUM_FILMS,
  AuthorisationStatus,
} from '../../../consts';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import {
  fetchPromoFilmAction,
  fetchFavoriteFilmsAction,
  fetchFilmsAction,
} from '../../../store/api-actions';
import { getGenre } from '../../../store/films-process/selectors';
import {
  getFilmsInfo,
  getLoadingStatus,
  getPromoFilm,
} from '../../../store/films-process/selectors';
import { getAuthStatus } from '../../../store/user-process/selectors';

function MainPage() {
  const dispatch = useAppDispatch();

  const [maxNumFilms, setMaxNumFilms] = useState(MAX_NUM_FILMS);
  const activeGenre = useAppSelector(getGenre);
  const filmsInfo = useAppSelector(getFilmsInfo);
  const isLoadingFilms = useAppSelector(getLoadingStatus);
  const promoFilm = useAppSelector(getPromoFilm);
  const authorisationStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
    dispatch(fetchFilmsAction());
  }, [dispatch]);

  useEffect(() => {
    if (authorisationStatus === AuthorisationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authorisationStatus, dispatch]);

  const handleShowMoreBtnClick = () => {
    setMaxNumFilms((max) => max + MAX_NUM_FILMS);
  };

  const getFilmsByGenre: GetFilmsByGenreFunc = useCallback(
    (list) => {
      if (activeGenre === GenresEnum.AllGenres) {
        return list;
      } else {
        return list.filter((film) => film.genre === activeGenre);
      }
    },
    [activeGenre]
  );

  const filmsByGenre = getFilmsByGenre(filmsInfo);

  const shownFilms = useMemo(
    () => filmsByGenre.filter((_, idx) => idx < maxNumFilms),
    [filmsByGenre, maxNumFilms]
  );

  return (
    <>
      <section className="film-card">
        <FilmCardBg
          img={promoFilm.backgroundImage}
          filmTitle={promoFilm.name}
        />
        <h1 className="visually-hidden">WTW</h1>

        <Header linkLogo="/" classes="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster
              imgSrc={promoFilm.posterImage}
              imgTitle={promoFilm.name}
            />

            <div className="film-card__desc">
              <FilmCardDesc
                title={promoFilm.name}
                genre={promoFilm.genre}
                year={promoFilm.released}
              />

              <div className="film-card__buttons">
                <FilmCardButtonPlay filmId={promoFilm.id} />
                <FilmCardButtonMylist film={promoFilm} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <div className="catalog__films-list">
            {isLoadingFilms && <Spinner />}
            <MemoFilmsList list={shownFilms} />
          </div>
          {shownFilms.length >= maxNumFilms ? (
            <ShowMoreButton onShowMoreClick={handleShowMoreBtnClick} />
          ) : null}
        </section>

        <Footer linkLogo="/" />
      </div>
    </>
  );
}

export default MainPage;
