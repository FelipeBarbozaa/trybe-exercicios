import React from 'react';
import MessageContext from './MessageContext';

function MessageProvider({ children }) {
  return (
    <MessageContext.Provider value = { {message: "Tá funcioandno"} }>
      {children}
    </MessageContext.Provider>
  )
}

export default MessageProvider;
