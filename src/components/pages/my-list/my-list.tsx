import Header from '../../header/header';
import FilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import { AppRoutes } from '../../../consts';
import { PropsList, FilmCardProps } from '../../../types/types';

function MyList({list}: PropsList<FilmCardProps>){
  return (
    <div className="user-page">
      <Header linkLogo={AppRoutes.Main} classes='user-page__head'>
        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList list={list}/>
        </div>
      </section>

      <Footer linkLogo={AppRoutes.Main} />
    </div>
  );
}

export default MyList;
