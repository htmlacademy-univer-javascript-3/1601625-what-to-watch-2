import { Link, useNavigate } from 'react-router-dom';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import BreadcrumbsList from '../../breadcrumbs-list/breadcrumb-list';
import FilmCardPoster from '../../film-card-poster/film-card-poster';
import FormAddReview from '../../form-add-review/form-add-review';
import { AppRoutes, AuthorisationStatus } from '../../../consts';
import Header from '../../header/header';
import { useAppSelector } from '../../../hooks';


function AddReview(){
  const navigate = useNavigate();
  const film = useAppSelector((state) => state.film);
  const authStatus = useAppSelector((state) => state.authorisationStatus);

  if (authStatus !== AuthorisationStatus.Auth) {
    navigate(AppRoutes.Main);
  }

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
