// import { TabsProps } from '../../types/types';
import { useState } from 'react';
import FilmTabsNav from '../film-tabs-nav/film-tabs-nav';
import FilmTabsContainer from '../film-tabs-container/film-tabs-container';
import { TABS } from '../../consts';
import { AddActiveClassFunction } from '../../types/types';

function FilmTabs(){
  const [activeTab, setActiveTab] = useState<number>(0);

  const addActiveClass:AddActiveClassFunction = (idx, activeClass) => (
    activeTab === idx ? activeClass : ''
  );

  return(
    <>
      <FilmTabsNav tabs={TABS} setActiveTab={setActiveTab} addActiveClass={addActiveClass}/>
      <FilmTabsContainer activeTab={activeTab} />
    </>
  );
}

export default FilmTabs;
