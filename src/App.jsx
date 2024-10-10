import React from "react";
import Navbar from './Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Todolist from "./Components/Todolist";
const App = () => {
  return (
    <div>
    <Router>
      <div>
        <Navbar />
      </div>
      <div style={({padding: '50px'})}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} /> 
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Todolist" element={<Todolist />} />
        </Routes>
        </div>
    </Router>
    </div>
  )
}

export default App;
