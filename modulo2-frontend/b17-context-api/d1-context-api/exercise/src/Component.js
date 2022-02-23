import React from 'react';
import MessageContext from './context/MessageContext';

function Component(props) {
  console.log(props)
  return (
    <MessageContext.Consumer>
      {
        ({message}) => (
          <h1>Mensagem: {message}</h1>
        )
      }
    </MessageContext.Consumer>
  )
}


export default Component;
