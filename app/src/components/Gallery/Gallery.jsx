import React from 'react';
import { Carousel, Typography } from 'antd';
import styles from './gallery.module.scss'

const { Title, Paragraph } = Typography;

function Gallery({ gallery }) {
    return (
        <Carousel>
            {
                gallery.map((el) => (
                    <section key={el.id} className={styles.gallery}>
                        {
                            el.title && <Title type="secondary" level={4} className={styles.gallery__heading}>{el?.title}</Title>
                        }
                        <img className={styles.gallery__image} src={el?.image?.src} alt={el?.image?.alt} />
                        {
                            el.text && <Paragraph className={styles.gallery__text} type="secondary">{el?.text}</Paragraph>
                        }
                        
                    </section>
                ))
            }
        </Carousel>
    );
}

export default Gallery;