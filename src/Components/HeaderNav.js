import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';

export default function HeaderNav() {
  return (
    <div className='container'>
      <div className='HeaderNav '>
        <div > 
            <a> SON DAKİKA</a>
        </div>
        <div>
            <a>GÜNCEL</a>
        </div>
        <div>
            <a>DÜNYA</a>            
        </div>
        <div>
            <a>EKONOMİ</a>  
        </div>
        <div>
            <a>SPOR</a>
        </div>
        <div>
            <a>YAŞAM</a>
        </div>
        <div>
            <a>BİLİM-TEKNOLOJİ</a>
        </div>
        <div>
            <a>AÇIK GÖRÜŞ</a>
        </div>
        <div>
            <a>YAZARLAR</a>
        </div>
        <div>
            <a>SEYEHAT</a>
        </div>
        <div>
            <RxHamburgerMenu/>
        </div>
      </div>
      
    </div>
  )
}
