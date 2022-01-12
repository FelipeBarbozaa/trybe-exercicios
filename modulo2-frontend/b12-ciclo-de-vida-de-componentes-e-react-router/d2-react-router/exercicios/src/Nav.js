import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <Link className="nav" to="/">Home</Link>
        <Link to="/about">about</Link>
      </div>
    )
  }
}

export default Nav;
