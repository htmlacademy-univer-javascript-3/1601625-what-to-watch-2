import { render, screen } from '@testing-library/react';
import HeadGuest from './head-guest';
import { withHistory } from '../../utils/mock-component';

describe('Component: HeadGuest', () => {
  it('should render correctly and display redirect link', () => {
    const message = 'Sign in';

    const preparedComponent = withHistory(<HeadGuest />);

    render(preparedComponent);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});

