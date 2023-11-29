import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
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
import { useAppDispatch } from '../../hooks';
import { showFilmcardList } from '../../store/action';

function App(props:AppProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(showFilmcardList(props.filmsInfo));
  }, [dispatch, props.filmsInfo]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={AppRoutes.Main}
            element={
              <MainPage
                title={props.title}
                genre={props.genre}
                year={props.year}
                poster={props.poster}
                bgImg={props.bgImg}
              />
            }
          />
        </Route>
        <Route path={AppRoutes.Login} element={ <SignIn /> }/>
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorisationStatus.Auth}>
              <MyList list={props.myList} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={
          <FilmPage
            list={props.filmsInfo}
            overviewInfo={props.overviewInfo}
            detailsInfo={props.detailsInfo}
            reviewsInfo={props.reviewsInfo}
          />
        }
        />
        <Route path={AppRoutes.AddReview} element={ <AddReview list={props.filmsInfo} /> }/>
        <Route path={AppRoutes.Player} element={ <Player videoLink={props.videoLink} /> }/>
        <Route path='*' element={ <NotFound /> }/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
