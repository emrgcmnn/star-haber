import React from 'react'
import Ph from '../png/photo.png'
import Vg from '../png/video.png'
import Lv from '../png/Live.png'
import Sb from '../png/search.png'

import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialInstagramCircular } from 'react-icons/ti';
import { SiYoutubemusic } from 'react-icons/si';
import { SiMaildotru } from 'react-icons/si';


export default function Navbar() {
  return (
    <>
    <div className=' bg-settings '>
        <div className='container sirala'>
            <div className='row '>
                
                <div class="col ">
                    <div className='f-s-15'><a className='pad-1'>DOLAR</a>27,1188</div>
                    <div className='f-s-15'><a className='pad-1'>EURO</a>28.9447 </div>
                    <div className='f-s-15'><a className='pad-1'>ALTIN</a>1672.2</div>
                    <div className='f-s-15'><a className='pad-1'>BIST100</a>7947.02 </div>
                </div>
                
                <div class="col j-bet mb-dev-Navbar">
                    <div className='f-s-15'>
                        <img className='img-w pad-1' src={Ph}></img> FOTO GALERİ
                    </div>
                    <div className='f-s-15'>
                        <img className='img-w pad-1' src={Vg}></img> VİDEO GALERİ
                    </div>
                    <div className='f-s-15'> 
                        <img className='img-w pad-1' src={Lv}></img>CANLI YAYIN
                    </div>
                    
                    <div className='deger'>
                        <div>
                        <BsFacebook/>
                        </div>
                        <div>
                        <AiFillTwitterCircle/>
                        </div>
                        <div>
                        <TiSocialInstagramCircular/>
                        </div>
                        <div>
                        <SiYoutubemusic/>
                        </div>
                        <div>
                        <SiMaildotru/>
                        </div>
                        
                        
                    </div>

                    <div>
                        <img className='img-w pad-1 ' src={Sb}></img>
                    </div>
                </div>

            </div>
        
        </div>

    </div>

    
    
    </>
  )
}
