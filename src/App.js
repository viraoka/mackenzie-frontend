import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components.js/home/Home';
import About from './Components.js/about/About';
import Residential from './Components.js/residential/Residential';
import Commercial from './Components.js/commercial/Commercial';
import Questions from './Components.js/questions/Questions';
import ContactUs from './Components.js/contactUs/ContactUs';
import NaviBar from './Components.js/NaviBar';


function App() {
  return (<Router>
    
    <NaviBar/>

    <Routes>
    <Route path='/' element={<Home/>} ></Route>
      <Route path='/about' element={<About/>} ></Route>
      <Route path='/residential-projects' element={<Residential/>} ></Route>
      <Route path='/commercial-projects' element={<Commercial/>} ></Route>
      <Route path='/questions' element={<Questions/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
    </Routes>

    </Router>

  );
}

export default App;
