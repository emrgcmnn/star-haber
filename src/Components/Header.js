import React, { useState,useEffect } from 'react';


import Star from '../png/E1.png'

export default function Header(props){


  
  const [sonrakiVakit, setSonrakiVakit] = useState("");
  const [kalanSure, setKalanSure] = useState("");


  const namazVakitleri = {
    İmsak: "05:00",
    Öğle: "13:00",
    İkindi: "16:30",
    Akşam: "19:45",
    Yatsı: "21:15"
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  
      for (const vakit in namazVakitleri) {
        const [saat, dakika] = namazVakitleri[vakit].split(':').map(Number);
        const vakitTime = saat * 3600 + dakika * 60;
        if (currentTime < vakitTime) {
          setSonrakiVakit(vakit);
  
          const remainingTime = vakitTime - currentTime;
          const hours = Math.floor(remainingTime / 3600);
          const minutes = Math.floor((remainingTime % 3600) / 60);
          const seconds = remainingTime % 60;
  
          setKalanSure(`${hours}:${minutes}:${seconds}`);
          break;
        }
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  

   




    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (props.onDarkModeChange) {
          props.onDarkModeChange(darkMode);
        }
      }, [darkMode]);

    
  return (
    <div className="AnaHeader h-100 container">

        <div className="Header row ">
                
            <div className='col-sm c-1'>
                <div>
                    <h1>İSTANBUL</h1>
                    <h2>27°C / 21°C</h2>
                    <p>Parçalı Bulutlu</p>
                </div>
            </div>
            
            <div className='col-sm c-2' >
                <div >
                    <img src={Star}></img>
                </div>
                <p>21 Eylül 2023 Perşembe / 7 RebiülEvvel 1445</p>
            </div>
            
            <div className='col-sm c-3'>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Gündüz Modu" : "Gece Modu"}
                </button>
                <div>
                    <h1>İSTANBUL</h1>
                    <h2 >{kalanSure}</h2> 
                </div>
                <div>
                    <p >{sonrakiVakit} vaktine kalan süre</p> 
                </div>
            </div>
         

        </div>

      
    </div>
  )
}
