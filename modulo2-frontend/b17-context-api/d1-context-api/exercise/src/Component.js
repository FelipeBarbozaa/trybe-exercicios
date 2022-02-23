import React from 'react';
import MessageContext from './context/MessageContext';

function Component(props) {
  console.log(props)
  return (
    <MessageContext.Consumer>
      {
        (contexto) => (<h1>Mensagem: {contexto.message}</h1>)
      }
    </MessageContext.Consumer>
  )
}


export default Component;
