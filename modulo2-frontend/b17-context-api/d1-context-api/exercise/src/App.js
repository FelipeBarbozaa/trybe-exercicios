import React from 'react';
import Component from './Component';
import MyContext from './MyContext';
import './App.css';

class App extends React.Component {
  render() {
    const contextValue = {
      mensagem: "Mensagem passada pelo ContextAPI"
    }
    return (
      <div>
        <h1>App.js</h1>
        <MyContext.Provider value={contextValue}>
          <Component />
        </MyContext.Provider>
      </div>
    )
  }
}

export default App;
