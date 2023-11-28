import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { FILMS_INFO, PROMO_FILM_DATA, MY_LIST_FILMS, VIDEO_LINK} from './mocks/films';
import { TAB_OVERVIEW_INFO, TAB_DETAILS_INFO } from './mocks/film-tabs';
import { REVIEWS } from './mocks/reviews';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App
        title={PROMO_FILM_DATA.title}
        genre={PROMO_FILM_DATA.genre}
        year={PROMO_FILM_DATA.year}
        poster={PROMO_FILM_DATA.poster}
        bgImg={PROMO_FILM_DATA.bgImg}
        filmsInfo={FILMS_INFO}
        myList={MY_LIST_FILMS}
        videoLink={VIDEO_LINK}
        overviewInfo={TAB_OVERVIEW_INFO}
        detailsInfo={TAB_DETAILS_INFO}
        reviewsInfo={REVIEWS}
      />
    </Provider>
  </React.StrictMode>
);
