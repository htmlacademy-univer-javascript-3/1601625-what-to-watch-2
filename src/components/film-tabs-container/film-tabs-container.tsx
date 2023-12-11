import FilmTabDetails from '../film-tab-details/film-tab-details';
import FilmTabOverview from '../film-tab-overview/film-tab-overview';
import FilmTabReviews from '../film-tab-reviews/film-tab-reviews';
import { FilmTabsContainerProps } from '../../types/types';

function FilmTabsContainer({ activeTab }:FilmTabsContainerProps) {
  switch (activeTab){
    case 0:
      return <FilmTabOverview />;
    case 1:
      return <FilmTabDetails />;
    case 2:
      return <FilmTabReviews />;
    default:
      return <FilmTabOverview />;
  }
}

export default FilmTabsContainer;

