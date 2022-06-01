import './App.css';

import NoteControl from 'components/NoteControl';
import NoteForm from 'components/NoteForm';
import NoteList from 'components/NoteList';
import React from 'react';
import { initialData, NoteType } from 'utils';

export type TabType = 'active' | 'archived';

type AppProps = {
  notes: NoteType[];
  activeTab: TabType;
  search: string;
};

class App extends React.Component<any, AppProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      notes: initialData,
      activeTab: 'active',
      search: '',
    };

    this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.filteredNotes = this.filteredNotes.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.handleArchiveNote = this.handleArchiveNote.bind(this);
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
  filteredNotes = () => {
    const search = this.state.search.toLowerCase();
    if (!search) return this.state.notes;

    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(search),
    );

    return filteredNotes;
  };

  handleAddNote(note: NoteType) {
    this.setState({
      notes: [note, ...this.state.notes],
    });
  }

  handleDeleteNote(id: number) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);

    this.setState({
      notes: newNotes,
    });
  }

  handleArchiveNote(id: number) {
    const newNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });

    this.setState({
      notes: newNotes,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="app-wrapper">
          <header className="app-header">
            <h1 className="app-header__title">Notes App</h1>
          </header>

          <div className="flex">
            <div>
              <NoteForm handleAddNote={this.handleAddNote} />
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
                  handleArchiveNote={this.handleArchiveNote}
                  handleDeleteNote={this.handleDeleteNote}
                  // is it okey ?
                  notes={this.filteredNotes()}
                />
              ) : (
                <NoteList
                  title="Archived"
                  archived={true}
                  handleArchiveNote={this.handleArchiveNote}
                  handleDeleteNote={this.handleDeleteNote}
                  // is it okey ?
                  notes={this.filteredNotes()}
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
