import { Link } from 'react-router-dom';
import HeaderLogo from '../../header-logo/header-logo';
import HeaderUserBlock from '../../header-user-block/header-user-block';
import RatingStars from '../../rating-stars/rating-stars';
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
        <form action="#" className="add-review__form">
          <div className="rating">
            <RatingStars />
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
}

export default AddReview;
