import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      save: '',
    }
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ email: value });
  }

  handleClick = () => {
    const { email } = this.state;
    this.setState({ save: email });
  }

  render() {
    const { save } = this.state;
    return (
      <main>
        <form action="">
          <label htmlFor="email">Email
            <input
              type="email"
              id="email"
              onChange = { this.handleInput }
            />
          </label>
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Enviar
          </button>
        </form>
        <h1>{ save }</h1>
      </main>
    )
  }
}

export default App;
