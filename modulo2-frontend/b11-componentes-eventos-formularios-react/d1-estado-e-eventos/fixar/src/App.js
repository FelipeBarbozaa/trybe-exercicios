import React from 'react'
import './App.css';

function click1() {
  console.log('click1')
}

function click2() {
  console.log('click2')
}

function click3() {
  console.log('click3')
}

class App extends React.Component {
  render() {

    return (
      <section>
      <button onClick={click1}>Button 1</button>
      <button onClick={click2}>Button 2</button>
      <button onClick={click3}>Button 3</button>
    </section>
  );
}
}

export default App;
