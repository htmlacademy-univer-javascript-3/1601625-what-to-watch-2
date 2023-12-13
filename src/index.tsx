import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import { VIDEO_LINK} from './mocks/films';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store} >
      <ToastContainer />
      <App
        videoLink={VIDEO_LINK}
      />
    </Provider>
  </React.StrictMode>
);
