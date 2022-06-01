import './App.css';

import React from 'react';

export type NotesType = {
  id: number;
  title: string;
  description: string;
};

class App extends React.Component<any, { notes: NotesType[] }, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      notes: [],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-header__title">Notes App</h1>
        </header>
      </div>
    );
  }
}

export default App;
