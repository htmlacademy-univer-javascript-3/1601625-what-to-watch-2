import { Link, useParams } from 'react-router-dom';
import HeaderLogo from '../../header-logo/header-logo';
import BreadcrumbsList from '../../breadcrumbs-list/breadcrumb-list';
import HeaderUserBlock from '../../header-user-block/header-user-block';
import FormAddReview from '../../form-add-review/form-add-review';
import { AppRoutes } from '../../../consts';
import { PropsList, FilmCardProps } from '../../../types/types';

function AddReview({list}:PropsList<FilmCardProps>){
  const {id} = useParams();
  const film = list.filter((item) => item.id === id);
  const {filmTitle, img} = film[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={`img\\${img}`} alt={filmTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <HeaderLogo linkLogo={AppRoutes.Main} />

          <nav className="breadcrumbs">
            {
              id === undefined || null ? <Link to='*' /> : <BreadcrumbsList id={id} filmTitle={filmTitle} />
            }
          </nav>
          <HeaderUserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={`img\\${img}`} alt={`${filmTitle}`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormAddReview />
      </div>

    </section>
  );
}

export default AddReview;
