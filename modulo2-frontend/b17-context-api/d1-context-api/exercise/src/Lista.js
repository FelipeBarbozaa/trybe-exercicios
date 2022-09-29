import { useState, useContext } from 'react';
import MessageContext from './context/MessageContext';

function Lista() {
  const { addNewList, allList } = useContext(MessageContext);
  const [list, addList] = useState('');

  function handleClick(e) {
    e.preventDefault();
    const newList = {
      id: allList.length,
      text: list
    }
    addNewList(newList);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          onChange={ ({ target: { value }}) => addList(value)}
          type="text" 
          value={ list }
        />
        <button type="submit">Adicionar</button>
      </form>
      {allList.map(({ id, text }) => (
        <p key={ id }>{ text }</p>
      ))}
    </div>
  )
}

export default Lista;
