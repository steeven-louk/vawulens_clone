import { Routes } from 'react-router-dom';
import './App.css';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import Gallery from './views/gallery/Gallery';
import Home from './views/home/Home';
import Plans from './views/plans/Plans';
import Trainers from './views/trainers/Trainers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Home/>
        <About/> 
        <Gallery/>
        <Plans/>
        <Trainers/>
        <Contact/>
      </Routes>
    </div>
  );
}

export default App;
