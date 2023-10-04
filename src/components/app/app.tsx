import MainPage from '../pages/main/main';
import { MainPageProps } from '../../types/types';

function App({title, genre, date}: MainPageProps) {

  return (
    <MainPage title={title} genre={genre} date={date} />
  );
}

export default App;
