import Header from './components/Header';
import logo from './logo.svg';
import { Body } from './styled';

function App() {
  return (
    <Body>
      <Header />

      <img src={logo} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a>
        Learn React
      </a>


    </Body>


  );
}

export default App;
