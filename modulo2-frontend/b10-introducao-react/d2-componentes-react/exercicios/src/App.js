import Image from './Image';
import './App.css';

const staringCat = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'

function App() {
  return (
    <section>
      <Image source={strnt} alternativeText='Cute cat staring'/>
    </section>
  );
}

export default App;
