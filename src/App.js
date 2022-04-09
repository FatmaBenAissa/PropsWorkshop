import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function App() {
  const person={
    name:"fatma",
    age:"25",
  }
  const handlealert=(x)=>alert(x);
  return (
    <div className="App">
      <header className="App-header">
      <Profile person={person} handlealert={handlealert}/>
      </header>
    </div>
  );
}

export default App;
