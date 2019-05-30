import React from 'react';
import './App.css';
import { withRouter} from 'react-router-dom'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import NoteList from './NoteList/NoteList';
// import NoteContent from './NoteContent/NoteContent';


class App extends React.Component {
  state = {
    currentFolder: '',
    currentNote: '',
    noteContent: ''
  }

  updateCurrentFolder = (id) => {
    if (id === 'back') {
      if (this.state.currentFolder) {
        this.props.history.push(`/folder/${this.state.currentFolder}`);
      } else {
        this.props.history.push('/')
      }
      this.setState({
        currentNote: '',
        noteContent: ''
      })
    } else {
      if (id === this.state.currentFolder) {
        console.log('Go home');
        this.props.history.push('/')
        this.setState({
          currentFolder: '',
          currentNote: '',
          noteContent: ''
        })
      } else {
        this.setState({
          currentFolder: id,
          currentNote: '',
          noteContent: ''
        })
      }
      if (id === '') {
        this.props.history.push('/')
      } else {
        this.props.history.push(`/folder/${id}`)
      }
    }
  }

  updateCurrentNote = (id, content) => {
    this.setState({
      currentNote: id,
      noteContent: content
    })
    this.props.history.push(`/note/${id}`)
  }
  
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <Header
            updateCurrentFolder={this.updateCurrentFolder}
          />
        </header>
        <main>
          <Sidebar
            currentFolder={this.state.currentFolder}
            updateCurrentFolder={this.updateCurrentFolder}
          />
          <NoteList
            updateCurrentNote={this.updateCurrentNote}
            currentFolder={this.state.currentFolder}
            currentNote={this.state.currentNote}
            content={this.state.noteContent}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
