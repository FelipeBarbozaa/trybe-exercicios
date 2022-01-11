import React from 'react';

class Joke extends React.Component {
  constructor() {
    super()

    this.state = {
      jokeObj: '',
      jokes: [],
    }

    this.renderJokeElement = this.renderJokeElement.bind(this)
    this.saveJoke = this.saveJoke.bind(this)

  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json'} };
    const url = 'https://icanhazdadjoke.com/';
    const requestReturn = await fetch(url, requestHeaders)
    const requestObject = await requestReturn.json();
    this.setState( {jokeObj: requestObject} )
  }

  componentDidMount() {
    this.fetchJoke()
  }

  saveJoke() {
    this.setState( { jokes: [...this.state.jokes, this.state.jokeObj]} )
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Save Joke
        </button>
      </div>
    );
  }
  

  render() {
    const { jokes } = this.state;
    return (
      <h1>{this.state.jokeObj.joke}</h1>
    )
  }
}

export default Joke;
