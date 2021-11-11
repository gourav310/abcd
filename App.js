import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(()=>{
    const url ="http://localhost:9000/home?"+"username=sms&password=a1b2c3d4"
  
  fetch(url).then((res)=>{if (res.ok) {
            console.log(res.json());
          } }
    
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
