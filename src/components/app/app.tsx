import { Routes, Route } from 'react-router-dom';
import { AppProps } from '../../types/types';
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

function App(props: AppProps) {
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
              <MyList list={[]} />
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
          element={<Player videoLink={props.videoLink} />}
        />
        <Route path={AppRoutes.NotFound} element={<NotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
