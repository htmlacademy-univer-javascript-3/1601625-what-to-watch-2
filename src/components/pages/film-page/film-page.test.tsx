import { render, screen, waitFor } from '@testing-library/react';
import { expect } from 'vitest';
import { withHistory, withStore } from '../../../utils/mock-component';
import FilmPage from './film-page';
import { SliceNameSpace, AuthorisationStatus, APIRoute, AppRoutes } from '../../../consts';
import { userInfo, extractActionsTypes, filmInfo } from '../../../utils/mock-data';
import { updateGenre } from '../../../store/films-process/films-process';
import { fetchFavoriteFilmsAction } from '../../../store/api-actions';
import { MemoryHistory, createMemoryHistory } from 'history';

describe('Component: FilmPage', () => {
  const mockFilm = filmInfo();
  const mockUser = userInfo();

  it('should render correctly and load data', async () => {
    const { withStoreComponent, mockStore, mockAxiosAdapter } = withStore(
      <FilmPage />,
      {
        [SliceNameSpace.Film]: {
          comments: [],
          similarFilms: [],
          isLoading: false,
          error: undefined,
          film: mockFilm
        },
        [SliceNameSpace.User]: {
          user: mockUser,
          authorisationStatus: AuthorisationStatus.Auth
        },
        [SliceNameSpace.MyList]: {
          isLoading: false,
          filmsInMyList: [],
          countFilmsInMyList: 0
        },
      }
    );

    const mockHistory: MemoryHistory = createMemoryHistory();
    mockHistory.push(AppRoutes.Film.replace(':id', mockFilm.id));

    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);

    mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, []);

    render(withHistoryComponent);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText(/more like this/i)).toBeInTheDocument();
    await waitFor(() => expect(extractActionsTypes(mockStore.getActions())).toEqual([
      updateGenre.type,
      fetchFavoriteFilmsAction.pending.type,
      fetchFavoriteFilmsAction.fulfilled.type
    ]));
  });
});
