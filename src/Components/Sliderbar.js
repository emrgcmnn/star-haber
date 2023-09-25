import React, { useState, useEffect  } from "react";
import Slider from "react-slick";
import NewsData from '../Data/HaberData'



export default function Sliderbar() {

    const [slidesToShow, setSlidesToShow] = useState(calculateSlidesToShow());

  function calculateSlidesToShow() {
    const width = window.innerWidth;
    
    if (width <= 990) {
      return 1;
    } else if (width <= 1400) {
      return 2;
    } else {
      return 3;
    }
  }

  useEffect(() => {
    function handleResize() {
      setSlidesToShow(calculateSlidesToShow());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  
    var settings = {
      dots: false,
      infinite: false,
      slidesToShow:slidesToShow,
      slidesToScroll: 1,
      autoplay: false,
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
                                  <div >{newsItem.title}</div>
                              </div>
                          </div>
                      ))}
                  </Slider>
              </div>
          </div>
      </div>
  )
  
}
