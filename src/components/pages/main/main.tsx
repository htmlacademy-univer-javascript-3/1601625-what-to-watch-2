import { useEffect, useMemo, useState } from 'react';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import Header from '../../header/header';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import FilmCardButtonPlay from '../../film-card-button-play/film-card-button-play';
import FilmCardButtonMylist from '../../film-card-button-mylist/film-card-button-mylist';
import FilmCardDesc from '../../film-card-desc/film-card-desc';
import GenresList from '../../genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import ShowMoreButton from '../../show-more-button/show-more-button';
import Footer from '../../footer/footer';
import Spinner from '../../spinner/spinner';
import { GetFilmsByGenreFunc } from '../../../types/types';
import { GenresEnum, MAX_NUM_FILMS } from '../../../consts';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { fetchFilmsAction, fetchPromoFilmAction } from '../../../store/api-actions';

function MainPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction());
  }, []);

  useEffect(() => {
    dispatch(fetchPromoFilmAction());
  }, []);

  const [maxNumFilms, setMaxNumFilms] = useState(MAX_NUM_FILMS);
  const activeGenre = useAppSelector((state) => state.filterGenres.genre);
  const filmsInfo = useAppSelector((state) => state.filterGenres.films);
  const isLoadingFilms = useAppSelector((state) => state.filterGenres.isLoading);
  const promoFilm = useAppSelector((state) => state.promo.promoFilm);

  const handlerShowMoreClick = () => {
    setMaxNumFilms((max) => max + MAX_NUM_FILMS);
  };

  const getFilmsByGenre: GetFilmsByGenreFunc = (list) => {
    if (activeGenre === GenresEnum.AllGenres) {
      return list;
    } else {
      return list.filter((film) => film.genre === activeGenre);
    }
  };

  const filmsByGenre = getFilmsByGenre(filmsInfo);

  const shownFilms = useMemo(
    () => filmsByGenre.filter((_, idx) => idx < maxNumFilms),
    [filmsByGenre, maxNumFilms]
  );

  return (
    <>
      <section className="film-card">
        <FilmCardBg img={promoFilm.backgroundImage} filmTitle={promoFilm.name} />
        <h1 className="visually-hidden">WTW</h1>

        <Header linkLogo="/" classes="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster imgSrc={promoFilm.posterImage} imgTitle={promoFilm.name} />

            <div className="film-card__desc">
              <FilmCardDesc title={promoFilm.name} genre={promoFilm.genre} year={promoFilm.released} />

              <div className="film-card__buttons">
                <FilmCardButtonPlay />
                <FilmCardButtonMylist />
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
            <FilmsList list={shownFilms} />
          </div>
          {shownFilms.length >= maxNumFilms ? (
            <ShowMoreButton onShowMoreClick={handlerShowMoreClick} />
          ) : null}
        </section>

        <Footer linkLogo="/" />
      </div>
    </>
  );
}

export default MainPage;
