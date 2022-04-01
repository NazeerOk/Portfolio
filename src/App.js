import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import './assets/css/customVar.css'
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
