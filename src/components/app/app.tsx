import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProps } from '../../types/types';
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

function App(props: AppProps) {
  return (
    <BrowserRouter>
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
            <PrivateRoute authorizationStatus={AuthorisationStatus.Auth}>
              <MyList list={[]} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Film}
          element={
            <FilmPage
              list={[]}
              overviewInfo={props.overviewInfo}
              detailsInfo={props.detailsInfo}
              reviewsInfo={props.reviewsInfo}
            />
          }
        />
        <Route
          path={AppRoutes.AddReview}
          element={<AddReview list={[]} />}
        />
        <Route
          path={AppRoutes.Player}
          element={<Player videoLink={props.videoLink} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
