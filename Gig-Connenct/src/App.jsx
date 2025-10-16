import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";

import { useState } from "react";
import Login from "./pages/Login";

const App = () => {

 

 

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />

      
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
    </div>
  );
};

export default App;
