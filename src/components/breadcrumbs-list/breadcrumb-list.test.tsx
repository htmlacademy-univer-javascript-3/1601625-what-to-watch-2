import { render, screen } from '@testing-library/react';
import BreadcrumbsList from './breadcrumb-list';
import { withHistory } from '../../utils/mock-component';

describe('Component: BreadcrumbsList', () => {
  it('should render correctly', () => {
    const mockData = {
      id: 'Aspdpddpkfdv',
      filmTitle: 'The Grand Budapest Hotel',
    };

    const preparedComponent = withHistory(<BreadcrumbsList id={mockData.id} filmTitle={mockData.filmTitle} />);
    render(preparedComponent);

    expect(screen.getByText(mockData.filmTitle)).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});

