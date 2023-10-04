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

function App({title, genre, date}: MainPageProps) {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={ <MainPage title={title} genre={genre} date={date} /> }
        />
        <Route path={AppRoutes.Login} element={ <SignIn /> }/>
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorisationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={ <FilmPage /> }/>
        <Route path={AppRoutes.AddReview} element={ <AddReview /> }/>
        <Route path={AppRoutes.Player} element={ <Player /> }/>
        <Route path='*' element={ <NotFound /> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
