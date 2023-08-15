import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Screens/Home";
import './App.css';
import About from "./Screens/About";
import NavBar from "./Screens/NavBar";
import Skills from "./Screens/Skills";
import Projects from "./Screens/Projects";
import Footer from "./Screens/Footer";
import Certificates from "./Screens/Certificates";

function App() {
  return (
    <div className="App">
      {/* <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/footer" element={<Footer/>} /> */}
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Footer/>
      {/* </Routes> */}
    </div>
  );
}

export default App;
