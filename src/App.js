import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";

function App() {
  return (
     <Router>
        <Routes>
         

         <Route path='/' element={<Home/>} />
         <Route path='/appointment' element={<Appointment/>} />
 
        </Routes>
            
         
        </Router>
  );
}

export default App;
