import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class About extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <h1>Página About</h1>
      </div>
    )
  }
}

export default About;
