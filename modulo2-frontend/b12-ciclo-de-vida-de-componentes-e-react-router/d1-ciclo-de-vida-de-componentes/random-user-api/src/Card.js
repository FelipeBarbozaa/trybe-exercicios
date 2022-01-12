import React from 'react';

class Card extends React.Component {
  render() {
    const { objeto } = this.props;
    const { email, name: {first, last}, picture: {large}, registered: {age} } = objeto;
    return (
      <section>
        <img src={large} alt={first}/>
        <p>Nome: {first} {last}</p>
        <p>Email: {email}</p>
        <p>Idade: {age} anos</p>
      </section>
    )
  }
}

export default Card;
