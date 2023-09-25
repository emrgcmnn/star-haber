import React, { useState,useEffect } from 'react';
import axios from 'axios';


import Star from '../png/E1.png'

export default function Header(props){

    const [nextPrayer, setNextPrayer] = useState("");
    const [timeRemaining, setTimeRemaining] = useState("");
  
    useEffect(() => {
      function fetchPrayerTimes() {
        const API_URL = 'https://api.aladhan.com/v1/timingsByCity?city=Istanbul&country=Turkey&method=13';
        axios.get(API_URL)
          .then(response => {
            const timings = response.data.data.timings;
  
            const now = new Date();
            const currentTime = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  
            const prayerTimes = {
              İmsak: timings.Fajr.split(':').map(Number),
              Öğle: timings.Dhuhr.split(':').map(Number),
              İkindi: timings.Asr.split(':').map(Number),
              Akşam: timings.Maghrib.split(':').map(Number),
              Yatsı: timings.Isha.split(':').map(Number),
            };
  
            for (const prayer in prayerTimes) {
              const prayerTime = prayerTimes[prayer][0] * 3600 + prayerTimes[prayer][1] * 60;
              if (currentTime < prayerTime) {
                setNextPrayer(prayer);
  
                const remainingTime = prayerTime - currentTime;
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;
  
                setTimeRemaining(`${hours}:${minutes}:${seconds} `);
                break;
              }
            }
          })
          .catch(error => {
            console.error("Namaz Vakitleri Çekilemedi: ", error);
          });
      }
  
      fetchPrayerTimes();
      const intervalId = setInterval(fetchPrayerTimes, 1000);
  
      // useEffect temizleme işlevi, component çıkışında interval'i temizler
      return () => clearInterval(intervalId);
    }, []);




    


    const [weather, setWeather] = useState({});
    const API_KEY = 'eeb8df93522245c6adc90822232509';
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Istanbul&lang=tr`;
  
    useEffect(() => {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          setWeather({
            temp: data.current.temp_c,
            condition: data.current.condition.text,
          });
        });
    }, []);

    





    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (props.onDarkModeChange) {
          props.onDarkModeChange(darkMode);
        }
      }, [darkMode]);

    
  return (
    <div className="h-100 container">

        <div className="Header row ">
                
            <div className='col-sm'>
                <div>
                    <h1>İSTANBUL</h1>
                    <h2>{weather.temp}°C / {weather.temp-6}°C</h2>
                    <p>{weather.condition}</p>
                </div>
            </div>
            
            <div className='col-sm'>
                <div >
                    <img src={Star}></img>
                </div>
                <p>21 Eylül 2023 Perşembe / 7 RebiülEvvel 1445</p>
            </div>
            
            <div className='col-sm'>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "Gündüz Modu" : "Gece Modu"}
                </button>
                <div>
                    <h1>İSTANBUL</h1>
                    <h2 >{timeRemaining}</h2> 
                </div>
                <div>
                    <p >{nextPrayer} vaktine kalan süre</p> {/* Örnek kullanım */}
                </div>
            </div>

        </div>

    </div>
  )
}
