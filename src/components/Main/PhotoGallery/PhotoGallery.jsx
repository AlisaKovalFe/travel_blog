import React from 'react';
import { Carousel } from 'antd';

function PhotoGallery(props) {
    const onChange = (currentSlide) => {
    console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 className="photoGallery_country_heading">Италия</h3>
                <img className='photoGallery_photo' src="https://t3.ftcdn.net/jpg/01/23/07/66/360_F_123076659_DV39WVnw3JDrlmqAZhqL4y7P0I97ZsGc.jpg" alt="Italy" />
            </div>
            <div>
                <h3 className="photoGallery_country_heading">Франция</h3>
                <img className='photoGallery_photo' src="https://media.cntraveller.com/photos/6220bfe35e6084e5d4f02404/4:3/w_5120,h_3840,c_limit/Seine%20paris%20bike-GettyImages-1161606501.jpeg" alt="France" />
            </div>
            <div>
                <h3 className="photoGallery_country_heading">Австрия</h3>
                <img className='photoGallery_photo' src="https://www.wienmuseum.at/fileadmin/_processed_/3/f/csm_Startbild_Ausgrabungen_Michaelerplatz_dcbcc51e4f.jpg" alt="Austria" />
            </div>
            <div>
                <h3 className="photoGallery_country_heading">Чехия</h3>
                <img className='photoGallery_photo' src="https://polis812.ru/blog/wp-content/uploads/2020/04/pexels-rachel-claire-6126485.jpg" alt="Czech" />
            </div>
        </Carousel>
    );
}

export default PhotoGallery;