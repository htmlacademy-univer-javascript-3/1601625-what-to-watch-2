import { render, screen } from '@testing-library/react';
import SignInMessage from './sign-in-message';

describe('Component: SignInMessage', () => {
  it('should render correctly', () => {
    const expectedText = 'We can\'t recognize this email and password combination. Please try again.';

    render(<SignInMessage />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
