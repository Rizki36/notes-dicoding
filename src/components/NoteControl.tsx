import { TabType } from 'App';
import React from 'react';

import Switch from './Switch';

type NoteControlProps = {
  activeTab: TabType;
  // eslint-disable-next-line no-unused-vars
  handleActiveTabChange: (activeTab: TabType) => void;
};

const NoteControl: React.FC<NoteControlProps> = (props) => {
  const { activeTab, handleActiveTabChange } = props;

  return (
    <div className="note-control">
      <Switch
        id="notes"
        name="activetab"
        checked={activeTab === 'active'}
        onChange={() => handleActiveTabChange('active')}
      >
        Notes
      </Switch>
      <Switch
        id="archived"
        name="activetab"
        checked={activeTab === 'archived'}
        onChange={() => handleActiveTabChange('archived')}
      >
        Archived
      </Switch>
      <input type="text" className="note-control__input" placeholder="Search by Name" />
      <button className="note-control__btn-search">Search</button>
    </div>
  );
};

export default NoteControl;
