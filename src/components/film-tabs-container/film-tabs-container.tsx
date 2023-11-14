import FilmTabDetails from '../film-tab-details/film-tab-details';
import FilmTabOverview from '../film-tab-overview/film-tab-overview';
import FilmTabReviews from '../film-tab-reviews/film-tab-reviews';
import { FilmTabsContainerProps } from '../../types/types';

function FilmTabsContainer({ activeTab, overviewInfo, detailsInfo, reviewsInfo }:FilmTabsContainerProps) {
  switch (activeTab){
    case 0:
      return <FilmTabOverview overviewInfo={overviewInfo} />;
    case 1:
      return <FilmTabDetails detailsInfo={detailsInfo} />;
    case 2:
      return <FilmTabReviews reviewsInfo={reviewsInfo} />;
    default:
      return <FilmTabOverview overviewInfo={overviewInfo} />;
  }
}

export default FilmTabsContainer;

