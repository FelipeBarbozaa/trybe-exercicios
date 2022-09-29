import React from 'react';
import Card from './Card';
import Loading from './Loading';

class Random extends React.Component {
  constructor() {
    super()

    this.state = {
      load: true,
      randomUser: '',
    }

    this.fetchRandom = this.fetchRandom.bind(this)
}

async fetchRandom() {
  this.setState({ load: true },
    async () => {
      const requestReturn = await fetch('https://api.randomuser.me/')
      const requestObject = await requestReturn.json();
      this.setState( {
        load: false,
        randomUser: requestObject.results
      })
    })
}

componentDidMount() {
  this.fetchRandom()
}

  render() {
    const { load } = this.state;
    return (
      <div>
        {load? <Loading /> : <Card objeto={this.state.randomUser[0]}/>}
        <button type="button" onClick={this.fetchRandom}>Atualizar</button>
      </div>
    )
  }
}

export default Random;
