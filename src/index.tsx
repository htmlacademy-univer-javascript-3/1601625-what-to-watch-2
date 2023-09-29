import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { promoFilmData } from './filmData';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      title={promoFilmData.title}
      genre={promoFilmData.genre}
      date={promoFilmData.date}
    />
  </React.StrictMode>
);
