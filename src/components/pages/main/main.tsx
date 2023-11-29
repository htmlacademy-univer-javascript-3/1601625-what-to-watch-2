import { useMemo, useState } from 'react';
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
import { MainPageProps, GetFilmsByGenreFunc } from '../../../types/types';
import { GenresEnum, MAX_NUM_FILMS } from '../../../consts';
import { useAppSelector } from '../../../hooks';

function MainPage({ title, genre, year, poster, bgImg }: MainPageProps) {
  const [maxNumFilms, setMaxNumFilms] = useState(MAX_NUM_FILMS);

  const activeGenre = useAppSelector((state) => state.filterGenres.genre);
  const filmsInfo = useAppSelector((state) => state.filterGenres.filmCardList);

  const getFilmsByGenre: GetFilmsByGenreFunc = (list) => {
    if (activeGenre === GenresEnum.AllGenres) {
      return list;
    } else {
      return list.filter((film) => film.genre === activeGenre);
    }
  };

  const handlerShowMoreClick = () => {
    setMaxNumFilms((max) => max + MAX_NUM_FILMS);
  };

  const filmsByGenre = getFilmsByGenre(filmsInfo);

  const shownFilms = useMemo(() => (
    filmsByGenre.filter((_, idx) => idx <= maxNumFilms)
  ), [filmsByGenre, maxNumFilms]);

  return (
    <>
      <section className="film-card">
        <FilmCardBg img={bgImg} filmTitle={title} />
        <h1 className="visually-hidden">WTW</h1>

        <Header linkLogo="/" classes="film-card__head" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster imgSrc={poster} imgTitle={title} />

            <div className="film-card__desc">
              <FilmCardDesc title={title} genre={genre} year={year} />

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
            <FilmsList list={shownFilms} />
          </div>
          {
            shownFilms.length >= maxNumFilms
              ? <ShowMoreButton onShowMoreClick={handlerShowMoreClick} />
              : null
          }
        </section>

        <Footer linkLogo="/" />
      </div>
    </>
  );
}

export default MainPage;
