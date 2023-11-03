 
import './App.css';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';
import Offer from './Component/Offers/Offer';
import Popular from './Component/Popular/Popular';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Popular/>
     <Offer/>
    </div>
  );
}

export default App;
