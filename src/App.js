import React from "react";

import './Component.scss'

import Header from "./Components/Header";
import HeaderNav from "./Components/HeaderNav";
import Navbar from "./Components/Navbar";
import Sliderbar from "./Components/Sliderbar";
import Reklam from "./Components/Reklam";
import Haber from "./Components/Haber";

function App() {

  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleDarkModeChange = (isActive) => {
    setIsDarkMode(isActive);
  };

  return (
    <div className={isDarkMode ? "ww-w dark-mode" : "ww-w"}>
      <Header onDarkModeChange={handleDarkModeChange} />
      <HeaderNav onDarkModeChange={handleDarkModeChange} />
      <Navbar/>
      <Sliderbar/>
      <Reklam/>
      <Haber/> 
    </div>
  );
}

export default App;
