import React from 'react';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import NoteList from './NoteList';


class App extends React.Component {
  state = {
    currentFolder: ''
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Sidebar />
          <NoteList currentFolder={this.state.currentFolder}/>
        </main>
      </div>
    );
  }
}

export default App;
