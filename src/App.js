import './App.css';
import Navbar from './Components/Navbar';
import Questions from './Components/Questions';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="ui container">
      <center>
        <Questions/>
      </center>
      </div>
    </div>
  );
}

export default App;
