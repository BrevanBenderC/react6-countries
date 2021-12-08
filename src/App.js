import './App.css';
import Main from './components/Main/Main';
import background from './world-map.jpg';

function App() {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      <h1>Our Wonderful List of Countries</h1>
      <Main />
    </div>
  );
}

export default App;
