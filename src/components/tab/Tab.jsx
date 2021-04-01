import React, { useState } from 'react';
import style from './tab.module.css'
import TabItemComponent from './TabItems';

const tabItems = [
  {
    id: 1,
    title: 'STEP 1',
    icon: 'tabitem__icon fas fa-child',
    content: 'step 1 content',
  },
  {
    id: 2,
    title: 'STEP 2',
    icon: 'tabitem__icon fas fa-users',
    content: 'step 2 content',
  },
  {
    id: 3,
    title: 'STEP 3',
    icon: 'tabitem__icon fas fa-network-wired',
    content: 'step 3 content',
  },
  {
    id: 4,
    title: 'STEP 4',
    icon: 'tabitem__icon fas fa-money-check-alt',
    content: 'step 4 content',
  },
];

const Tab = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={style.wrapper}>
      <div className={style.tabs}>
        {tabItems.map(({ id, icon, title }) =><TabItemComponent
           key={title}
           icon={icon}
           title={title}
           onItemClicked={() => setActive(id)}
           isActive={active === id}
         />
      )}
      </div>
      <div className={style.content}>
        {tabItems.map(({ id, content }) => {
          return active === id ? content : ''
        })}
      </div>
     </div>
  );
};

export default Tab;
