import { render, screen } from '@testing-library/react';
import SignInError from './sign-in-error';

describe('Component: SignInError', () => {
  it('should render correctly', () => {
    const mockMessage = 'password';
    const expectedText = `Please enter a valid ${mockMessage}`;
    const messageTestId = 'error-message';

    render(<SignInError message={mockMessage} />);

    const messageContainer = screen.getByTestId(messageTestId);
    const message = messageContainer.textContent;

    expect(messageContainer).toBeInTheDocument();
    expect(expectedText).toEqual(message);
  });
});
