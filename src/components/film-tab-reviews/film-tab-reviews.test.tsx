import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import FilmTabReviews from './film-tab-reviews';
import { SliceNameSpace } from '../../consts';
import { filmInfo, generateFilmReviewArr } from '../../utils/mock-data';

describe('Component: FilmTabReviews', () => {
  const mockReviews = generateFilmReviewArr(7);
  const mockFilm = filmInfo();

  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<FilmTabReviews />, {
      [SliceNameSpace.Film]: {
        comments: mockReviews,
        similarFilms: [],
        isLoading: false,
        error: undefined,
        film: mockFilm,
      },
    });

    render(withStoreComponent);
    expect(screen.getByTestId('film-card-reviews')).toBeInTheDocument();
  });

  it('should render num reviews equal array.length', () => {
    const { withStoreComponent } = withStore(<FilmTabReviews />, {
      [SliceNameSpace.Film]: {
        comments: mockReviews,
        similarFilms: [],
        isLoading: false,
        error: undefined,
        film: mockFilm,
      },
    });

    render(withStoreComponent);
    expect(screen.getAllByRole('review').length).toBe(mockReviews.length);
  });
});
