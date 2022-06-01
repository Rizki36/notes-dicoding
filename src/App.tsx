import './App.css';

import NoteForm from 'components/NoteForm';
import NoteList from 'components/NoteList';
import React from 'react';
import { initialData, NoteType } from 'utils';

class App extends React.Component<any, { notes: NoteType[] }, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      notes: initialData,
    };
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
              <NoteForm />
            </div>
            <div className="w-full mx-8">
              <NoteList
                title="Notes"
                archived={false}
                handleArchiveNote={() => {}}
                handleDeleteNote={() => {}}
                notes={this.state.notes}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
