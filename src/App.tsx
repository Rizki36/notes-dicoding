import './App.css';

import NoteControl from 'components/NoteControl';
import NoteForm from 'components/NoteForm';
import NoteList from 'components/NoteList';
import React from 'react';
import { initialData, NoteType } from 'utils';

export type TabType = 'active' | 'archived';

type AppProps = {
  notes: NoteType[];
  filteredNotes: NoteType[];
  activeTab: TabType;
  search: string;
};

class App extends React.Component<any, AppProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      notes: initialData,
      filteredNotes: initialData,
      activeTab: 'active',
      search: '',
    };

    this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
    this.filteredSearchNote = this.filteredSearchNote.bind(this);
  }

  handleActiveTabChange = (activeTab: TabType) => {
    this.setState({ activeTab });
  };

  handleSearchInput = (value: string) => {
    this.setState({ search: value });
  };

  /**
   * search notes by name
   * when search is empty, return all notes
   */
  filteredSearchNote = () => {
    const search = this.state.search.toLowerCase();
    if (!search) return this.state.notes;

    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(search),
    );
    return filteredNotes;
  };

  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <header className="app-header">
            <h1 className="app-header__title">Notes App</h1>
          </header>

          <div className="flex">
            <div>
              <NoteForm />
            </div>
            <div className="w-full mx-8">
              <NoteControl
                activeTab={this.state.activeTab}
                search={this.state.search}
                handleActiveTabChange={this.handleActiveTabChange}
                handleSearchInput={this.handleSearchInput}
              />
              {this.state.activeTab === 'active' ? (
                <NoteList
                  title="Notes"
                  archived={false}
                  handleArchiveNote={() => {}}
                  handleDeleteNote={() => {}}
                  notes={this.filteredSearchNote()}
                />
              ) : (
                <NoteList
                  title="Archived"
                  archived={true}
                  handleArchiveNote={() => {}}
                  handleDeleteNote={() => {}}
                  notes={this.filteredSearchNote()}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
