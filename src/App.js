import './App.css';
import Main from './components/main/main';
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
