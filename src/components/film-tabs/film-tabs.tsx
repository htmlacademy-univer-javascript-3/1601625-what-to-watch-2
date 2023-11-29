import { useState } from 'react';
import FilmTabsNav from '../film-tabs-nav/film-tabs-nav';
import FilmTabsContainer from '../film-tabs-container/film-tabs-container';
import { TABS } from '../../consts';
import { AddActiveClassFunc, FilmTabsProps } from '../../types/types';

function FilmTabs({ overviewInfo, detailsInfo, reviewsInfo }: FilmTabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const addActiveClass: AddActiveClassFunc = (idx, activeClass) =>
    activeTab === idx ? activeClass : '';

  return (
    <>
      <FilmTabsNav
        tabs={TABS}
        setActiveTab={setActiveTab}
        addActiveClass={addActiveClass}
      />
      <FilmTabsContainer
        activeTab={activeTab}
        overviewInfo={overviewInfo}
        detailsInfo={detailsInfo}
        reviewsInfo={reviewsInfo}
      />
    </>
  );
}

export default FilmTabs;
