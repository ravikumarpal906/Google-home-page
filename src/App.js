import logo from './logo.svg';
import './App.css';
import Searchbar from './container/Searchbar';
import GoogleLogo from'./images/GoogleLogo.png';
import Navbar from './container/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img className='GoogleLogo' src= {GoogleLogo} alt= 'Logo' />
      <Searchbar />
    </div>
  );
}

export default App;
