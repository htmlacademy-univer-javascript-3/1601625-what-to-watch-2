import { render, screen } from '@testing-library/react';
import NotFound from './not-found';
import { withHistory } from '../../../utils/mock-component';

describe('Component: NotFound', () => {
  it('should render correctly and display redirect link', () => {
    const errorCode = '404';
    const message = 'UH OH! You\'re lost.';

    const preparedComponent = withHistory(<NotFound />);

    render(preparedComponent);

    expect(screen.getByText(errorCode)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});

