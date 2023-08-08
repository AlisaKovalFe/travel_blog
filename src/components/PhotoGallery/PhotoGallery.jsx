import React from 'react';
import styles from './photoGallery.module.scss'
import { photoGallery } from '../../data/photoGallery'
import { Carousel } from 'antd';

function PhotoGallery(props) {
    const onChange = (currentSlide) => {
    console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            {
                photoGallery.map((el) => (
                    <div key={el.id} className={styles.photoCard}>
                        <h3 className={styles.photoCard__heading}>{el.title}</h3>
                        <img className={styles.photoCard__image} src={el.cover.src} alt={el.cover.alt} />
                    </div>
                ))
            }
        </Carousel>
    );
}

export default PhotoGallery;