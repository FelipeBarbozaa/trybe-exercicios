import React from 'react';
import Component from './Component';
import MessageProvider from './context/MessageProvider';
import ListaProvider from './context/ListaProvider';
import './App.css';
import Lista from './Lista';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App.js</h1>
        <MessageProvider>
          <Component />
        </MessageProvider>
        <ListaProvider>
          <Lista />
        </ListaProvider>
      </div>
    )
  }
}

export default App;
