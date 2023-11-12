import { Link, useParams } from 'react-router-dom';
import FilmCardBg from '../../film-card-bg/film-card-bg';
import BreadcrumbsList from '../../breadcrumbs-list/breadcrumb-list';
import FormAddReview from '../../form-add-review/form-add-review';
import { AppRoutes } from '../../../consts';
import { PropsList, FilmCardProps } from '../../../types/types';
import Header from '../../header/header';

function AddReview({list}:PropsList<FilmCardProps>){
  const {id} = useParams();
  const film = list.filter((item) => item.id === id);
  const {filmTitle, img} = film[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <FilmCardBg img={img} filmTitle={filmTitle} />
        <h1 className="visually-hidden">WTW</h1>

        <Header linkLogo={AppRoutes.Main}>
          <nav className="breadcrumbs">
            {
              id === undefined || null ? <Link to='*' /> : <BreadcrumbsList id={id} filmTitle={filmTitle} />
            }
          </nav>
        </Header>

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
