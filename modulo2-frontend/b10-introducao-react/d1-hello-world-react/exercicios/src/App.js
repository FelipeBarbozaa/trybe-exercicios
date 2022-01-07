import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Finalizar o curso', 'Arrumar um emprego', 'Ter uma renda boa e fixa', 'Ter uma casa perto da praia', 'Ter saúde']

class App extends React.Component {
  render() {
    return (
      <ul>{ compromissos.map((e) => Task(e)) }</ul>
    )
  }
}

export default App;
