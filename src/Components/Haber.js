import React, { Component,useState } from "react";
import Slider from "react-slick";
import AnaData from '../Data/AnaHaberData';
 // AnaData'yı içe aktarın

export default function Haber() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    const [selectedImage, setSelectedImage] = useState(AnaData[0].res);
    const [activeDetail, setActiveDetail] = useState(AnaData[0].ayrinti); 
    const [activeBaslik, setActiveBaslik] = useState(AnaData[0].baslik);

    const handleImageHover = (index) => { 
        setSelectedImage(AnaData[index].res);
        setActiveDetail(AnaData[index].ayrinti); 
        setActiveBaslik(AnaData[index].baslik); 
    };

    return (
        <>
        <div className="Haber">
            <div className="Anaresimdiv">
                {selectedImage && <img className='anaresim' src={selectedImage} alt="Seçilen Resim" />}
     
            </div>
           
            <div className='Haberler'>
                {AnaData.map((data, index) => (
                    <div 
                        key={data.id}
                        className='anaitem' 
                        onMouseOver={() => handleImageHover(index)}> 
                        <div className='item'>
                            <img src={data.res}></img>
                            <div>{data.baslik}</div>
                        </div>
                        {selectedImage === data.res && <div className='aktif'></div>}
                    </div>
                ))}
            </div>    
        </div>

        <div className="SsliderHaber">
            <Slider {...settings}>
                {AnaData.map(data => (
                    <div className="SAnaresimdiv" key={data.id}>
                        <img className='Sanaresim' src={data.res} alt="Seçilen Resim" />
                        <div className='Shaberacik'>{data.baslik}</div> 
                    </div>
                ))}
            </Slider>
        </div>

    </>
    );

   
}
