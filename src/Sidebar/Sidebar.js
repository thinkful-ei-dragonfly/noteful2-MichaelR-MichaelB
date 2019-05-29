import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Sidebar.css'

import FolderList from '../FolderList/FolderList';

function Sidebar(props) {
  return (
    <div className="Sidebar">
      <Switch>
      <Route
          path="/note"
          component={() => {
            return (
              <div>
                <button
                  className="add-button"
                  onClick={() => props.updateCurrentFolder('back')}>Go back</button>
              </div>
            )
          }}
          />
        <Route
          path="/"
          render={() => <FolderList currentFolder={props.currentFolder} updateCurrentFolder={props.updateCurrentFolder}/>}
        />
      </Switch>
    </div>
  )
}

export default Sidebar;