import React, { useState } from 'react';
import res1 from '../png/res1.png';
import res2 from '../png/res2.png';
import res3 from '../png/res3.png';
import res4 from '../png/res4.png';
import res5 from '../png/res5.png';

import Reklams from '../png/reklamor.png'

export default function Haber() {
    const [selectedImage, setSelectedImage] = useState(res1);
    const [activeImage, setActiveImage] = useState(res1); 

    const handleImageHover = (imageSrc) => {
        setSelectedImage(imageSrc);
        setActiveImage(imageSrc); // Bu satırı ekledik
    };

    return (
        <div className="container haberresim">
            
            <div className="row ">
                {selectedImage && <img src={selectedImage} alt="Seçilen Resim" />}
            </div>
           
            <div className=" resimGaleri">
                <div className="col-sm">
                    <div>
                        <div className='' onMouseOver={() => handleImageHover(res1)}>
                            <div>
                                <img className="" src={res1} alt="Haber 1" />
                            </div>
                            <span className="">Cumhurbaşkanı Erdoğan: Azerbaycan...</span>
                        </div>

                    </div>
                    {activeImage === res1 && <div className='aktif'></div>}
                </div>
                
                <div className="col-sm">
                    <div>
                        <div className='' onMouseOver={() => handleImageHover(res2)}>
                            <div>
                                <img className="" src={res2} alt="Haber 2" />
                            </div>
                            <span className="">Yevlah'taki kritik görüşmenin</span>
                        </div>
                    </div>
                    {activeImage === res2 && <div className='aktif'></div>}
                </div>
                <div className="col-sm">
                    <div>
                    <div className='' onMouseOver={() => handleImageHover(res3)}>
                        <div>
                            <img className="" src={res3} alt="Haber 3" />
                        </div>
                        <span className="">Ekonomik krizle ilgili yeni açıklamalarFransızlardan</span>
                    </div>
                        
                    </div>
                    {activeImage === res3 && <div className='aktif'></div>}

                </div>
                <div className="col-sm">
                    <div>
                        <div className='' onMouseOver={() => handleImageHover(res4)}>
                            <div>
                                <img className="" src={res4} alt="Haber 4" />
                            </div>
                            <span className="">Yunan muhalefeti Miçotakis</span>
                        </div>
                    </div>
                    {activeImage === res4 && <div className='aktif'></div>}
                </div>

                <div className="col-sm">
                    <div>
                        <div className='' onMouseOver={() => handleImageHover(res5)}>
                            <div>
                                <img className="" src={res5} alt="Haber 5" />
                            </div>
                            <span className="">MSB kaynakları: Azerbaycan'ın Karabağ'da</span>
                        </div>
                        {activeImage === res5 && <div className='aktif'></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}
