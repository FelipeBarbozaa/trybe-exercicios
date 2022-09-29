import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';


class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Página Home</h1>
      </div>
    )
  }
}

export default Home;
