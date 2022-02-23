import React from 'react';
import Component from './Component';
import MessageProvider from './context/MessageProvider';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App.js</h1>
        <MessageProvider>
          <Component />
        </MessageProvider>
      </div>
    )
  }
}

export default App;
