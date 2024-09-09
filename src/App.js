import logo from './hotdop.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="imie">
          HELLO KONRAD
        </p>
        <a href='https://pictureofhotdog.com' className='App-link'>
        Learn HotDog
        </a>
        <a href='https://pictureofahotdog.com' className='App-link'>
        Learn a HotDog
        </a>
      </header>
    </div>
  );
}

export default App;
