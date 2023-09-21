import React, { useState } from 'react';
import res1 from '../png/res1.png';
import res2 from '../png/res2.png';
import res3 from '../png/res3.png';
import res4 from '../png/res4.png';
import res5 from '../png/res5.png';

export default function Haber() {
    const [selectedImage, setSelectedImage] = useState(res1);

    const handleImageHover = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    return (
        <div className="container Haber">
            <div className="row">
                {selectedImage && <img src={selectedImage} alt="Seçilen Resim" />}
            </div>
           
            <div className="row">
                <div className="col-sm">
                    <a className='' onMouseOver={() => handleImageHover(res1)}>
                        <img className="" src={res1} alt="Haber 1" />
                        <span className="">Cumhurbaşkanı Erdoğan: Azerbaycan...</span>
                    </a>
                </div>
                <div className="col-sm">
                    <a className='' onMouseOver={() => handleImageHover(res2)}>
                        <img className="" src={res2} alt="Haber 2" />
                        <span className="">Yevlah'taki kritik görüşmenin</span>
                    </a>
                </div>
                <div className="col-sm">
                    <a className='' onMouseOver={() => handleImageHover(res3)}>
                        <img className="" src={res3} alt="Haber 3" />
                        <span className="">Ekonomik krizle ilgili yeni açıklamalarFransızlardan</span>
                    </a>
                </div>
                <div className="col-sm">
                    <a className='' onMouseOver={() => handleImageHover(res4)}>
                        <img className="" src={res4} alt="Haber 4" />
                        <span className="">Yunan muhalefeti Miçotakis</span>
                    </a>
                </div>
                <div className="col-sm">
                    <a className='' onMouseOver={() => handleImageHover(res5)}>
                        <img className="" src={res5} alt="Haber 5" />
                        <span className="">MSB kaynakları: Azerbaycan'ın Karabağ'da</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
