import { render, screen } from '@testing-library/react';
import RatingStar from './rating-star';

describe('Component: RatingStar', () => {
  it('should render correct', () => {
    const handlerInputOnChange = vi.fn();

    render(
      <RatingStar
        id='01'
        setRating={handlerInputOnChange}
        isChecked={false}
        readOnly={false}
      />
    );

    expect(screen.getByLabelText('Rating 01')).toBeInTheDocument();
  });
});

