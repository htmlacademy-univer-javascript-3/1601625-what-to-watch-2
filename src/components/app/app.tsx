import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoutes } from '../../consts';
import MainPage from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import FilmPage from '../pages/film-page/film-page';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Layout from '../layout/layout';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import { AuthorisationStatus } from '../../consts';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';

function App() {
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector(getAuthStatus);

  useEffect(() => {
    if (authorisationStatus === AuthorisationStatus.Auth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [authorisationStatus]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={AppRoutes.Main}
            element={
              <MainPage />
            }
          />
        </Route>
        <Route path={AppRoutes.Login} element={<SignIn />} />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={<FilmPage />}/>
        <Route
          path={AppRoutes.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Player}
          element={<Player />}
        />
        <Route path={AppRoutes.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
