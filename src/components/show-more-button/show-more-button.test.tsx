import { render, screen } from '@testing-library/react';
import ShowMoreButton from './show-more-button';

describe('Component: ShowMoreButton', () => {
  it('should render correct', () => {
    const handlerShowMoreClick = vi.fn();

    render(<ShowMoreButton onShowMoreClick={handlerShowMoreClick}/>);
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
