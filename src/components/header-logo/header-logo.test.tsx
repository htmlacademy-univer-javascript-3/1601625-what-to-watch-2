import { render, screen } from '@testing-library/react';
import HeaderLogo from './header-logo';
import { withHistory } from '../../utils/mock-component';

describe('Component: HeaderLogo', () => {
  it('should render correctly and display redirect link', () => {
    const preparedComponent = withHistory(<HeaderLogo linkLogo='/'/>);

    render(preparedComponent);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
});

