import { render, screen } from '@testing-library/react';
import Rating from './rating';
import { NUM_RATING_STAR } from '../../consts';

describe('Component: Rating', () => {
  it('should render correct', () => {
    const handlerInputOnChange = vi.fn();

    render(
      <Rating
        setRating={handlerInputOnChange}
        isChecked={false}
        readOnly={false}
      />
    );

    expect(screen.getAllByTestId('rating-star').length).toBe(NUM_RATING_STAR);
  });
});

