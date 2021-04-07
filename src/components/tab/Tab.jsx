import React, { useState } from 'react';
import { tabItems } from '../../constant/TabItems';
import style from './tab.module.css'
import TabItemComponent from './TabItems';

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
