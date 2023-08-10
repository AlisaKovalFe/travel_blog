import React from 'react';
import styles from './videos.module.scss'
import { videoCovers } from '../../data/videoCovers'
import { Card } from 'antd';
import { videoOfRegions } from '../../data/videoOfRegions'
import { Collapse } from 'antd';
const { Meta } = Card;


//какая-то проблемА с ключомами в консоли, не разобралась
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

            <div className={styles.videos}>
                {videoCovers.map((el, index) => (
                    <Card
                        key={el.id}
                        hoverable
                        className={styles.video}                 
                        cover={<img alt={el.cover.alt} src={el.cover.src} className={styles.video__image}/>}
                    >
                        <Meta title={el.title} description={el.description} />
                            {
                                videoOfRegions.map((el, i) => (
                                    index === i && (
                                        <Collapse 
                                            key={el.id}  
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