import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPageProps } from '../../types/types';
import { AppRoutes, AuthorisationStatus } from '../../consts';
import MainPage from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import FilmPage from '../pages/film-page/film-page';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import { MY_LIST_FILMS, VIDEO_LINK} from '../../mocks/films';

function App({title, genre, date, filmsInfo}: MainPageProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={AppRoutes.Main}
            element={ <MainPage title={title} genre={genre} date={date} filmsInfo={filmsInfo} /> }
          />
        </Route>
        <Route path={AppRoutes.Login} element={ <SignIn /> }/>
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorisationStatus.Auth}>
              <MyList list={MY_LIST_FILMS} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={ <FilmPage /> }/>
        <Route path={AppRoutes.AddReview} element={ <AddReview filmInfo={filmsInfo[0]} /> }/>
        <Route path={AppRoutes.Player} element={ <Player videoLink={VIDEO_LINK} /> }/>
        <Route path='*' element={ <NotFound /> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
