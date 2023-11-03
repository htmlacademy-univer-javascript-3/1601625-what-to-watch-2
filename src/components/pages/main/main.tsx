import Header from '../../header/header';
import Poster from '../../poster/poster';
import FilmCardButtonPlay from '../../film-card-button-play/film-card-button-play';
import FilmCardButtonMylist from '../../film-card-button-mylist/film-card-button-mylist';
import FilmCardDesc from '../../film-card-desc/film-card-desc';
import GenresList from '../../genres-list/genres-list';
import FilmsList from '../../films-list/films-list';
import CatalogButton from '../../catalog-button/catalog-button';
import Footer from '../../footer/footer';
import { MainPageProps } from '../../../types/types';

function MainPage({title, genre, date, filmsInfo}: MainPageProps){
  return (
    <>
      <section className="film-card">
        <Header linkLogo="/" />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <Poster path='img/the-grand-budapest-hotel-poster.jpg'/>

            <div className="film-card__desc">
              <FilmCardDesc title={title} genre={genre} date={date} />

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
