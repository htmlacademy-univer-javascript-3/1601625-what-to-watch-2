import { render, screen } from '@testing-library/react';
import Genre from './genre';

describe('Component: Genre', () => {
  const mockGenre = 'Darama';

  it('should render correctly', () => {
    const handlerBtnOnClick = vi.fn();

    render(
      <Genre
        genre={mockGenre}
        activeClass=''
        setActiveGenre={handlerBtnOnClick}
      />
    );

    expect(screen.getByText(mockGenre)).toBeInTheDocument();
  });
});

