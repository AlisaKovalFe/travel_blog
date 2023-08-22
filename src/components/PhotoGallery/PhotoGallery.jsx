import React from 'react';
import styles from './photoGallery.module.scss'
import { photoGallery } from '../../data/photoGallery'
import { Carousel } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;

function PhotoGallery(props) {
    const onChange = (currentSlide) => {
    console.log(currentSlide);
    };
    return (
        <Carousel afterChange={onChange}>
            {
                photoGallery.map((el) => (
                    <section key={el.id} className={styles.photoCard}>
                        <Title type="secondary" level={4} className={styles.photoCard__heading}>{el.title}</Title>
                        <img className={styles.photoCard__image} src={el.cover.src} alt={el.cover.alt} />
                    </section>
                ))
            }
        </Carousel>
    );
}

export default PhotoGallery;