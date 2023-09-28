import MainPage from '../pages/main/main';

type MainPageProps = {
  title: string;
  genre: string;
  date: string | number;
};

function App({title, genre, date}: MainPageProps) {

  return (
    <MainPage title={title} genre={genre} date={date} />
  );
}

export default App;
