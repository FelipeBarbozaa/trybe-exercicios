import React from 'react
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      quantidadeDeClique: 0,
    }

    this.click = this.click.bind(this)
  }

  click() {
    this.setState((e, _props) => ({
      quantidadeDeClique: e.quantidadeDeClique + 1
    }), () => {
      console.log(`${this.mudarCor(this.state.quantidadeDeClique)}`)
    })
  }

  mudarCor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const clicks = this.state.quantidadeDeClique
    return (
      <section>
      <button onClick={ this.click }
      style={{ backgroundColor: this.mudarCor(clicks)}}
      >{clicks}</button>
    </section>
  );
}}

export default App;
