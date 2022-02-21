import React from 'react';
import MyContext from './MyContext';

class Component extends React.Component {
  render() {
    console.log(typeof(this.props.teste));
    return (
      <MyContext.Consumer>
        {
          value => (
            <h1>{`A menasgem passada é: ${value.mensagem}`}</h1>
          )
        }
      </MyContext.Consumer>
    )
  }
}

export default Component;
