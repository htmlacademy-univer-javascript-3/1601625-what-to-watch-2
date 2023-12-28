import { render, screen } from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { AppRoutes } from '../../consts';
import { withHistory } from '../../utils/mock-component';
import FilmCardButtonPlay from './film-card-button-play';
import { filmInfo } from '../../utils/mock-data';

describe('Component: FilmCardButtonPlay', () => {
  const film = filmInfo();
  it('should render correct', () => {
    const preparedComponent = withHistory(<FilmCardButtonPlay filmId={film.id} />);

    render(preparedComponent);
    expect(screen.getByText('Play')).toBeInTheDocument();
  });

  it('should rederect to page with film player when user click "Play"', async() => {
    const mockHistory: MemoryHistory = createMemoryHistory();
    const preparedComponent = withHistory(<FilmCardButtonPlay filmId={film.id} />, mockHistory);

    render(preparedComponent);
    await userEvent.click(screen.getByRole('button'));
    expect(mockHistory.location.pathname).toBe(AppRoutes.Player.replace(':id', film.id));
  });
});
