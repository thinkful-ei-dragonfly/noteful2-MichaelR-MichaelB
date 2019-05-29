import React from 'react';
import './App.css';
import { Route, withRouter} from 'react-router-dom'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import NoteList from './NoteList/NoteList';


class App extends React.Component {
  state = {
    currentFolder: 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1'
  }


  updateCurrentFolder = (id) => {
    this.setState({
      currentFolder: id, 
      
    })
    if (id === '') {
      this.props.history.push('/')
    } else {
      this.props.history.push(`/folder/${id}`)
    }
    
  }


  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header updateCurrentFolder={this.updateCurrentFolder} />
        </header>
        <main>
          <Sidebar updateCurrentFolder={this.updateCurrentFolder}/>
          <NoteList currentFolder={this.state.currentFolder}/>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
