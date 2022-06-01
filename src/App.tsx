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
};

class App extends React.Component<any, AppProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      notes: initialData,
      activeTab: 'active',
    };

    this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
  }

  handleActiveTabChange = (activeTab: TabType) => {
    this.setState({ activeTab });
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
                handleActiveTabChange={this.handleActiveTabChange}
              />

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
