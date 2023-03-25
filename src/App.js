
import { useState } from 'react';
import './App.css';
import { Backdrop } from './components/Backdrop';
import { JourneyBoard } from './components/JourneyBoard';
import { Toolbar } from './components/Toolbar';
import { HomePage } from './pages/HomePage';

function App() {

  const [slider,setSlider] = useState(false);
  const toggleSlider = () => {
    setSlider((prevState)=>!prevState)
  }

  return (
    <div className="App">
      <HomePage />
      <Toolbar openSlider={toggleSlider}/>
      <Backdrop sidebar={slider} closeSlider={toggleSlider}/>      
      <JourneyBoard sidebar={slider}/>
    </div>
  );
}

export default App;
