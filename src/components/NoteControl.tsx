import { TabType } from 'App';
import React from 'react';

import Switch from './Switch';

type NoteControlProps = {
  search: string;
  activeTab: TabType;
  // eslint-disable-next-line no-unused-vars
  handleActiveTabChange: (activeTab: TabType) => void;
  // eslint-disable-next-line no-unused-vars
  handleSearchInput: (search: string) => void;
};

const NoteControl: React.FC<NoteControlProps> = (props) => {
  const { activeTab, handleActiveTabChange, handleSearchInput } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const search = e.currentTarget.elements.search.value;
    handleSearchInput(search);
  };

  return (
    <form onSubmit={handleSubmit} className="note-control">
      <div className="note-control__active-tab">
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
      </div>
      <div className="note-control__search-group">
        <input
          name="search"
          type="text"
          className="note-control__input"
          placeholder="Search by Name"
        />
        <button className="note-control__btn-search">Search</button>
      </div>
    </form>
  );
};

export default NoteControl;
