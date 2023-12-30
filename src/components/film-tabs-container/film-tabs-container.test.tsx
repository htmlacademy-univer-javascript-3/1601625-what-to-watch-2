import { render, screen } from '@testing-library/react';
import FilmTabsContainer from './film-tabs-container';
import { withStore } from '../../utils/mock-component';
import { SliceNameSpace } from '../../consts';
import { filmInfo } from '../../utils/mock-data';

describe('Component: FilmTabsContainer', () => {
  const mockFilm = filmInfo();

  it('should render "FilmTabOverview" if "activeTab" equal 0', () => {
    const { withStoreComponent } = withStore(
      <FilmTabsContainer activeTab={0} />,
      {
        [SliceNameSpace.Film]: {
          comments: [],
          similarFilms: [],
          isLoading: false,
          error: undefined,
          film: mockFilm,
        },
      }
    );

    render(withStoreComponent);

    expect(screen.getByTestId('film-tab-overview')).toBeInTheDocument();
    expect(screen.queryByTestId('film-card-reviews')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-tab-details')).not.toBeInTheDocument();
  });

  it('should render "FilmTabDetails" if "activeTab" equal 1', () => {
    const { withStoreComponent } = withStore(
      <FilmTabsContainer activeTab={1} />,
      {
        [SliceNameSpace.Film]: {
          comments: [],
          similarFilms: [],
          isLoading: false,
          error: undefined,
          film: mockFilm,
        },
      }
    );

    render(withStoreComponent);

    expect(screen.getByTestId('film-tab-details')).toBeInTheDocument();
    expect(screen.queryByTestId('film-tab-overview')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-card-reviews')).not.toBeInTheDocument();
  });

  it('should render "FilmTabReviews" if "activeTab" equal 2', () => {
    const { withStoreComponent } = withStore(
      <FilmTabsContainer activeTab={2} />,
      {
        [SliceNameSpace.Film]: {
          comments: [],
          similarFilms: [],
          isLoading: false,
          error: undefined,
          film: mockFilm,
        },
      }
    );

    render(withStoreComponent);

    expect(screen.getByTestId('film-card-reviews')).toBeInTheDocument();
    expect(screen.queryByTestId('film-tab-overview')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-tab-details')).not.toBeInTheDocument();
  });

  it('should render "FilmTabOverview" if "activeTab" equal other values', () => {
    const { withStoreComponent } = withStore(
      <FilmTabsContainer activeTab={3} />,
      {
        [SliceNameSpace.Film]: {
          comments: [],
          similarFilms: [],
          isLoading: false,
          error: undefined,
          film: mockFilm,
        },
      }
    );

    render(withStoreComponent);

    expect(screen.getByTestId('film-tab-overview')).toBeInTheDocument();
    expect(screen.queryByTestId('film-card-reviews')).not.toBeInTheDocument();
    expect(screen.queryByTestId('film-tab-details')).not.toBeInTheDocument();
  });
});

