import { Link } from 'react-router-dom';
import HeaderLogo from '../../header-logo/header-logo';
import HeaderUserBlock from '../../header-user-block/header-user-block';
import FormAddReview from '../../form-add-review/form-add-review';
import { AppRoutes } from '../../../consts';
import { PropsAddReview } from '../../../types/types';

function AddReview({filmInfo}:PropsAddReview){
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={`img\\${filmInfo.img}`} alt={filmInfo.filmTitle} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <HeaderLogo linkLogo={AppRoutes.Main} />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoutes.Film} className="breadcrumbs__link">{filmInfo.filmTitle}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <HeaderUserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={`img\\${filmInfo.img}`} alt={filmInfo.filmTitle} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <FormAddReview />
      </div>

    </section>
  );
}

export default AddReview;
