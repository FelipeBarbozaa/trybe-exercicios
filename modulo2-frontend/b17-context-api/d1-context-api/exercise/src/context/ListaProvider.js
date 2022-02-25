import React, { useState } from 'react';
import MessageContext from './MessageContext';

function ListaProvider({ children }) {
  const [allList, addList] = useState([]);

  function addNewList(newList){
    addList((prevList) => [...prevList, newList])
  }

  return (
    <MessageContext.Provider value = { {allList, addNewList} }>
      {children}
    </MessageContext.Provider>
  )
}

export default ListaProvider;
