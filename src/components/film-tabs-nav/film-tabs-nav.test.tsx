import { render, screen } from '@testing-library/react';
import FilmTabsNav from './film-tabs-nav';
import { TABS } from '../../consts';

describe('Component: FilmTabsNav', () => {
  it('should render correctly', () => {
    const handlerBtnOnClick = vi.fn();
    const addActiveClassFn = vi.fn();

    render(
      <FilmTabsNav
        tabs={TABS}
        setActiveTab={handlerBtnOnClick}
        addActiveClass={addActiveClassFn}
      />
    );

    expect(screen.getAllByRole('tab').length).toBe(TABS.length);
  });
});
