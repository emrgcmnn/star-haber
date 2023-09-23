import React, { Component } from "react";
import Slider from "react-slick";
import NewsData from '../Data/HaberData'



export default function Sliderbar() {

  
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    }
  
  

    return (
      <div className='slider'>
          <div className="container anaSlider">
              <div className="col-sm sndak">SON <br/> DAKİKA</div>
              <div className="vertical-line "></div>
              <div className="col-sm haberkay">
                  <Slider {...settings}>
                      {NewsData.map(newsItem => (
                          <div className='haberkay2 col-sm' key={newsItem.id}>
                              <div className="haber-container">
                                  <div className='saatdiv'>{newsItem.time}</div>
                                  <div className='haberic'>{newsItem.title}</div>
                              </div>
                          </div>
                      ))}
                  </Slider>
              </div>
          </div>
      </div>
  )
  
}
