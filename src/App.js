import './app.scss';
import Movies from './pages/Movies';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Tv from './pages/Tv';
import Details from './pages/Details';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Search from './components/Search';


function App() {



  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<Tv />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Signup />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </div>
    </Router>

  );
}

export default App;
