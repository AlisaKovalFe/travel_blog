import React from 'react';
import styles from './videos.module.scss'
import { videoCovers } from '../../data/videoCovers'
import { Card } from 'antd';
import { videoOfRegions } from '../../data/videoOfRegions'
import { Collapse } from 'antd';
const { Meta } = Card;

function Videos(props) {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Видео из моих любимых мест</h2>
            <p className={styles.description}>
                Здесь я собрала видео из моих любимых регионов Европы, чтобы воспоминания были всегда рядом.
            </p>     

            <div className={styles.videoList}>
                {videoCovers.map((el, index) => (
                    <Card
                        hoverable
                        className={styles.videoCard}                 
                        cover={<img alt={el.cover.alt} src={el.cover.src} className={styles.videoCard.cover}
                        key={el.id}
                        />
                    }
                    >
                        <Meta title={el.title} description={el.description} />
                        {
                            videoOfRegions.map((el, i) => (
                                index === i && (
                                    <Collapse 
                                        key={el.id}  //какая-то проблемс с ключом в консоли
                                        items={el} 
                                        onChange={onChange} 
                                    />
                                )    
                            ))
                        }
                    </Card>
                    )
                )}           
            </div>

            
        </div>
    );
}

export default Videos;