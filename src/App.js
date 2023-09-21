import React from "react";

import './Component.scss'

import Header from "./Components/Header";
import HeaderNav from "./Components/HeaderNav";
import Navbar from "./Components/Navbar";
import Sliderbar from "./Components/Sliderbar";
import Reklam from "./Components/Reklam";
import Haber from "./Components/Haber";

function App() {
  return (
    <div >
      <Header/> 
      <HeaderNav/>
      <Navbar/>
      <Sliderbar/>
      <Reklam/>
      <Haber/> 
    </div>
  );
}

export default App;
