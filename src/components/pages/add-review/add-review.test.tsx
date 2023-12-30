import { render, screen } from '@testing-library/react';
import AddReview from './add-review';
import { withHistory, withStore } from '../../../utils/mock-component';
import { SliceNameSpace, AuthorisationStatus } from '../../../consts';
import { filmInfo, userInfo} from '../../../utils/mock-data';

describe('Component: AddReview', () => {
  const mockFilm = filmInfo();
  const user = userInfo();

  it('should render correctly', () => {
    const { withStoreComponent } = withStore(
      <AddReview />,
      {
        [SliceNameSpace.Film]: {
          comments: [],
          similarFilms: [],
          isLoading: false,
          error: undefined,
          film: mockFilm,
        },
        [SliceNameSpace.User]: {
          user: user,
          authorisationStatus: AuthorisationStatus.Auth
        }
      }
    );

    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });
});
