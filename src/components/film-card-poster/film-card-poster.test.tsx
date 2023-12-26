import { render, screen } from '@testing-library/react';
import FilmCardPoster from './film-card-poster';

describe('Component: FilmCardPoster', () => {
  it('should render correctly', () => {
    const mockData = {
      img: 'https://url-to-image/image.jpg',
      filmTitle: 'The Grand Budapest Hotel',
    };

    render(<FilmCardPoster imgSrc={mockData.img} imgTitle={mockData.filmTitle} />);
    expect(screen.getByAltText(mockData.filmTitle)).toBeInTheDocument();
  });
});

