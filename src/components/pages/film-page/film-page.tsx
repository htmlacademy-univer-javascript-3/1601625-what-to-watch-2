import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoutes, AuthorisationStatus, GenresEnum } from '../../../consts';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import Header from '../../header/header';
import FilmCardButtonPlay from '../../film-card-button-play/film-card-button-play';
import FilmCardButtonMylist from '../../film-card-button-mylist/film-card-button-mylist';
import FilmCardDesc from '../../film-card-desc/film-card-desc';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import FilmTabs from '../../film-tabs/film-tabs';
import MemoFilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateGenre } from '../../../store/films-process/films-process';
import { fetchFilmAction, fetchComentsAction, fetchSimilarFilmsAction, fetchFavoriteFilmsAction } from '../../../store/api-actions';
import { MAX_NUM_SIMILAR_FILM } from '../../../consts';
import { getFilmInfo, getSimilarFilms, getError } from '../../../store/film-process/selectors';
import { getAuthStatus } from '../../../store/user-process/selectors';

function FilmPage(){
  const dispatch = useAppDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(updateGenre(GenresEnum.AllGenres));

    if (id !== undefined){
      dispatch(fetchFilmAction(id));
      dispatch(fetchComentsAction(id));
      dispatch(fetchSimilarFilmsAction(id));
    }
  }, [id]);

  const film = useAppSelector(getFilmInfo);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authStatus = useAppSelector(getAuthStatus);
  const error = useAppSelector(getError);
  const authorisationStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (authorisationStatus === AuthorisationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authorisationStatus]);

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="film-card__hero">
          <FilmCardBg img={film.backgroundImage} filmTitle={film.name} />
          <h1 className="visually-hidden">WTW</h1>
          <Header linkLogo={AppRoutes.Main} classes='film-card__head'/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmCardDesc
                title={film.name}
                genre={film.genre}
                year={film.released}
              />

              <div className="film-card__buttons">
                <FilmCardButtonPlay filmId={film.id} />
                <FilmCardButtonMylist film={film} />
                {
                  authStatus === AuthorisationStatus.Auth
                    ? <Link to={id === undefined || error !== undefined ? AppRoutes.NotFound : `/films/${id}/review`} className="btn film-card__button">Add review</Link>
                    : null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster imgSrc={film.posterImage} imgTitle={film.name} classes='film-card__poster--big'/>

            <div className="film-card__desc">
              <FilmTabs />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <MemoFilmsList list={similarFilms.filter((_, idx) => idx < MAX_NUM_SIMILAR_FILM)}/>
          </div>
        </section>

        <Footer linkLogo={AppRoutes.Main} />
      </div>
    </>
  );
}

export default FilmPage;
