import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoutes, GenresEnum } from '../../../consts';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import Header from '../../header/header';
import FilmCardButtonPlay from '../../film-card-button-play/film-card-button-play';
import FilmCardButtonMylist from '../../film-card-button-mylist/film-card-button-mylist';
import FilmCardDesc from '../../film-card-desc/film-card-desc';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import FilmTabs from '../../film-tabs/film-tabs';
import FilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import {FilmCardProps, FilmPageProps } from '../../../types/types';
import { useAppDispatch } from '../../../hooks';
import { updateGenre } from '../../../store/action';
import { useAppSelector } from '../../../hooks';

function FilmPage({overviewInfo, detailsInfo, reviewsInfo}:FilmPageProps<FilmCardProps>){
  const {id} = useParams();
  const films = useAppSelector((state) => state.filterGenres.films);
  const film = films.filter((item) => item.id === id);
  const {name, previewImage, genre} = film[0];

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateGenre(GenresEnum.AllGenres));
  }, [dispatch]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <FilmCardBg previewImage={previewImage} name={name} />
          <h1 className="visually-hidden">WTW</h1>
          <Header linkLogo={AppRoutes.Main} classes='film-card__head'/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmCardDesc
                title={name}
                genre={genre}
                year='2014'
              />

              <div className="film-card__buttons">
                <FilmCardButtonPlay />
                <FilmCardButtonMylist />
                <Link to={id === undefined ? '*' : `/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster imgSrc={previewImage} imgTitle={name} classes='film-card__poster--big'/>

            <div className="film-card__desc">
              <FilmTabs overviewInfo={overviewInfo} detailsInfo={detailsInfo} reviewsInfo={reviewsInfo} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList list={films.filter((_, idx) => idx < 4)}/>
          </div>
        </section>

        <Footer linkLogo={AppRoutes.Main} />
      </div>
    </>
  );
}

export default FilmPage;
