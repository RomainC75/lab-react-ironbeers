import logo from './logo.svg';
import './App.css';
// https://ih-beers-api2.herokuapp.com/beers
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/beers/:id" element={<><Header/><SingleBeer/></>}/>
          <Route path="/beers" element={<><Header/><ListBeers/></>}/>
          
          <Route path="/random-beer" element={<><Header/><RandomBeer/></>}/>
          <Route path="/new-beer" element={<><Header/><NewBeer/></>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
