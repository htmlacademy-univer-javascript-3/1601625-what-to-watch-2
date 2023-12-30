import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-component';
import { SliceNameSpace, APIRoute, AppRoutes } from '../../consts';
import FormAddReview from './form-add-review';
import { filmInfo, filmReview, extractActionsTypes } from '../../utils/mock-data';
import { Route, Routes } from 'react-router-dom';
import { MemoryHistory, createMemoryHistory } from 'history';
import { sendCommentAction } from '../../store/api-actions';
import { redirectToRoute } from '../../store/action';

describe('Component: FormAddReview', () => {
  const mockFilm = filmInfo();
  const mockReview = { ...filmReview(), id: mockFilm.id};

  it('should render correctly', () => {
    const { withStoreComponent } = withStore(
      <FormAddReview />,
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

    expect(screen.getByPlaceholderText(/review text/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /post/i })).toBeDisabled();
  });

  it('should submit review', async () => {
    const mockHistory: MemoryHistory = createMemoryHistory();

    const { withStoreComponent, mockStore, mockAxiosAdapter} = withStore(
      <Routes>
        <Route path={AppRoutes.AddReview} element={<FormAddReview />} />
        <Route path={AppRoutes.Film} element={<FormAddReview />} />
      </Routes>,
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

    const withHistoryComponent = withHistory(withStoreComponent, mockHistory);

    mockAxiosAdapter.onPost(`${APIRoute.Comments}/${mockFilm.id}`).reply(200, {comment: mockReview.comment, rating: mockReview.rating});
    mockHistory.push(AppRoutes.AddReview.replace(':id', mockFilm.id));
    render(withHistoryComponent);

    await userEvent.click(screen.getAllByTestId('rating-star')[0]);
    await userEvent.type(screen.getByPlaceholderText('Review text'), mockReview.comment);

    await waitFor(() => expect(screen.getByRole('button', { name: /post/i })).toBeEnabled());
    await userEvent.click(screen.getByRole('button', { name: /post/i }));
    await waitFor(() => expect(extractActionsTypes(mockStore.getActions())).toEqual([
      sendCommentAction.pending.type,
      redirectToRoute.type,
      sendCommentAction.fulfilled.type,
    ]));

    mockHistory.push(AppRoutes.Film.replace(':id', mockFilm.id));
    expect(mockHistory.location.pathname).toBe(AppRoutes.Film.replace(':id', mockFilm.id));
  });
});
