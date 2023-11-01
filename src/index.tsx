import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PROMO_FILM_DATA } from './mocks/film-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      title={PROMO_FILM_DATA.title}
      genre={PROMO_FILM_DATA.genre}
      date={PROMO_FILM_DATA.date}
    />
  </React.StrictMode>
);
