import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Abstract from "./pages/abstract";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/abstract" element = { <Abstract /> }/>
      </Routes>
    </Router>
  )
}

export default App;