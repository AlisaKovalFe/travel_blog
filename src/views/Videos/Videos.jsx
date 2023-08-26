import React from 'react';
import styles from './videos.module.scss'
import Helper from '../../components/Helper/Helper'
import { videos } from '../../data/videos'
import { Card } from 'antd';
import { Collapse } from 'antd';
const { Meta } = Card;


//какая-то проблемА с ключомами в консоли, не разобралась
function Videos(props) {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <section className={styles.wrapper}>
            <Helper src='/images/girl-with-brown-hair.svg' text='здесь классные видео, ' link='https://www.youtube.com/playlist?list=PL3l-shLZkbojBldu9iHqyIl8TLNK65N8P'/>
            <h2 className={styles.heading}>Видео из моих любимых мест</h2>
            <p className={styles.description}>
                Здесь я собрала видео из моих любимых регионов Европы, чтобы воспоминания были всегда рядом.
            </p>     

            <div className={styles.videos}>
                {videos.map((el, index) => (
                    <Card
                        key={el.id}
                        hoverable
                        className={styles.video}                 
                        cover={<img alt={el.cover.alt} src={el.cover.src} className={styles.video__image}/>}
                    >
                        <Meta title={el.title} description={el.description} />
                        <Collapse items={el.records} onChange={onChange} />
                    </Card>
                    )
                )}           
            </div>
        </section>
    );
}

export default Videos;