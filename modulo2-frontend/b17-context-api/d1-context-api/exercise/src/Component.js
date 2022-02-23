import React, { useContext } from 'react';
import MessageContext from './context/MessageContext';

function Component(props) {
  const { message, clicks, setClicks } = useContext(MessageContext);
  return (
    <div>
      <h1>Mensagem provida: { message }</h1>
      <button onClick={ () => setClicks((prevClicks) => prevClicks + 1)}>Quantidade de clicks: {clicks}</button>
    </div>
  )
}


export default Component;
