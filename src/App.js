import logo from './logo.svg';
import logoAgregar from './img/mas-positivo-suma-simbolo-matematico.svg';
import logoDescargar from './img/download.svg';


import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoAgregar} className="App-logo-new" alt="logo agregar" />
        <br />
        <img src={logoDescargar} className="App-logo-new" alt="logo descargar" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
