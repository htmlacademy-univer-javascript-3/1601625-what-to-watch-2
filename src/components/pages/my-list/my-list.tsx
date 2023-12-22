import Header from '../../header/header';
import Spinner from '../../spinner/spinner';
import MemoFilmsList from '../../films-list/films-list';
import Footer from '../../footer/footer';
import { AppRoutes } from '../../../consts';
import { useAppSelector } from '../../../hooks';
import { getCountFilmsInMyList, getFilmsInMyList, getLoadingState } from '../../../store/my-list-process/selectors';


function MyList() {
  const filmsInMyList = useAppSelector(getFilmsInMyList);
  const isLoading = useAppSelector(getLoadingState);
  const countFilmsInMyList = useAppSelector(getCountFilmsInMyList);

  return (
    <div className="user-page">
      <Header linkLogo={AppRoutes.Main} classes='user-page__head'>
        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">{countFilmsInMyList}</span>
        </h1>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          { isLoading && <Spinner /> }
          <MemoFilmsList list={filmsInMyList}/>
        </div>
      </section>

      <Footer linkLogo={AppRoutes.Main} />
    </div>
  );
}

export default MyList;
