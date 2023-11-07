import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { FILMS_INFO, PROMO_FILM_DATA} from './mocks/films';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      title={PROMO_FILM_DATA.title}
      genre={PROMO_FILM_DATA.genre}
      year={PROMO_FILM_DATA.year}
      filmsInfo={FILMS_INFO}
    />
  </React.StrictMode>
);
