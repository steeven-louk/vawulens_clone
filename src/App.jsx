import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './views/about/About';
import Contact from './views/contact/Contact';
import Gallery from './views/gallery/Gallery';
import Home from './views/home/Home';
import Plans from './views/plans/Plans';
import Trainers from './views/trainers/Trainers';

function App() {
  return (
    <div className="App">

        <Navbar/>
        <Routes>
          <Route path="/" exact element={ <Home/>} />
          <Route path='/about' element={ <About/> } />
          <Route path="/gallery" element={ <Gallery/>} />
          <Route path="/plans" element={ <Plans/>} />
          <Route path="/trainers" element={ <Trainers/>} />
          <Route path="/contact" element={ <Contact/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
