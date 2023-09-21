import React from 'react';
import NewsData from '../Data/HaberData'



export default function Sliderbar() {

  
  
  
  return (


    <div className='slider'>
      <div class="container ">
        
        <div class="col-sm">
          SON <br/>
          DAKİKA
          
        </div>
        <div class="vertical-line "></div>
        <div className="col-sm">
            {NewsData.map(newsItem => (
                <div key={newsItem.id}>
                    <div>{newsItem.time}</div>
                    <div>{newsItem.title}</div>
                </div>
            ))}
        </div>
        
      </div>
    </div>
  )
}
