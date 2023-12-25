import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import BreadcrumbsList from '../../breadcrumbs-list/breadcrumb-list';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import FormAddReview from '../../form-add-review/form-add-review';
import { AppRoutes } from '../../../consts';
import Header from '../../header/header';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getError, getFilmInfo } from '../../../store/film-process/selectors';
import { fetchFilmAction } from '../../../store/api-actions';

function AddReview(){
  const film = useAppSelector(getFilmInfo);
  const error = useAppSelector(getError);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (error !== undefined) {
      navigate(AppRoutes.NotFound);
    } else if (error === undefined && film.id === '' && id !== undefined) {
      dispatch(fetchFilmAction(id));
    }
  }, [error]);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBg img={film.backgroundImage} filmTitle={film.name} />
        <h1 className="visually-hidden">WTW</h1>

        <Header linkLogo={AppRoutes.Main}>
          <nav className="breadcrumbs">
            {
              film.id === undefined || null
                ? <Link to={AppRoutes.NotFound} />
                : <BreadcrumbsList id={film.id} filmTitle={film.name} />
            }
          </nav>
        </Header>
        <FilmCardPoster imgSrc={film.posterImage} imgTitle={film.name} classes='film-card__poster--small' />
      </div>

      <div className="add-review">
        <FormAddReview />
      </div>

    </section>
  );
}

export default AddReview;
