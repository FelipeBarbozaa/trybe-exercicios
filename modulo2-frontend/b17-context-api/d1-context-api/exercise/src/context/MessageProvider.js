import React, { useState } from 'react';
import MessageContext from './MessageContext';

function MessageProvider({ children }) {
  const [clicks, setClicks] = useState(0);

  return (
    <MessageContext.Provider value = { {message: "Tá funcionando", clicks, setClicks} }>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageProvider;
