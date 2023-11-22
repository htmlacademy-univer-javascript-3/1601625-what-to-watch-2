import FilmCardBg from '../../film-card-bg/film-card-bg';
import Header from '../../header/header';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import FilmCardButtonPlay from '../../film-card-button-play/film-card-button-play';
import FilmCardButtonMylist from '../../film-card-button-mylist/film-card-button-mylist';
import FilmCardDesc from '../../film-card-desc/film-card-desc';
import GenresList from '../../genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import CatalogButton from '../../catalog-button/catalog-button';
import Footer from '../../footer/footer';
import { MainPageProps } from '../../../types/types';

function MainPage({title, genre, year, poster, bgImg, filmsInfo}: MainPageProps){
  return (
    <>
      <section className="film-card">
        <FilmCardBg img={bgImg} filmTitle={title} />
        <h1 className="visually-hidden">WTW</h1>

        <Header linkLogo="/" classes='film-card__head' />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <FilmCardPoster imgSrc={poster} imgTitle={title}/>

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
            <FilmsList list={filmsInfo}/>
          </div>
          <CatalogButton />
        </section>

        <Footer linkLogo="/" />
      </div>
    </>
  );
}

export default MainPage;
