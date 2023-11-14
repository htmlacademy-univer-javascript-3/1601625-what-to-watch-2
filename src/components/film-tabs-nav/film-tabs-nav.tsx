import { TabsNavProps } from '../../types/types';

function FilmTabsNav({ tabs, setActiveTab, addActiveClass }:TabsNavProps) {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          tabs.map((tab, idx) => (
            <li className={`film-nav__item ${addActiveClass(idx, 'film-nav__item--active')}`} key={`tab-${tab}`}>
              <a className='film-nav__link' onClick={() => setActiveTab(idx)}>{tab}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}

export default FilmTabsNav;

