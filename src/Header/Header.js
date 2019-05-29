import React from 'react';
import { Route, withRouter} from 'react-router-dom'
import './Header.css';

function Header(props) {
  return (
    <div>
      <h1 onClick={() => props.updateCurrentFolder('')}>Noteful</h1>
    </div>
  );
}

export default withRouter(Header);