//import logo from './components/cabecera';
import './App.css';


import Image from './components/Image';
import Text from './components/Text';
import Welcome from './components/Welcome';

function App() {
  return (
      <div className='App'>
          <Welcome name="Alonzo" />
          <Welcome msg="Hola como estas?" />
          <Text p="lorem ipsum algo mas"/>
          <Image />
          <h1>Hola Mundo 2</h1>
      </div>
  );
}

export default App;
