import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVideosThunk } from '../../store/actions/videosActions'
import styles from './videos.module.scss'
import Helper from '../../components/Helper/Helper'
import { Card } from 'antd';
import { Collapse } from 'antd';
import { addHelpersThunk } from '../../store/actions/helpersActions'

const { Meta } = Card;

function Videos() {
    const dispatch = useDispatch();
    const { videos } = useSelector((store) => store.videosStore);
    const { helpers } = useSelector((store) => store.helpersStore);

    useEffect(() => {   
        dispatch(addVideosThunk())
        dispatch(addHelpersThunk())
    }, [])    

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>{videos.heading}</h2>
            <p className={styles.description}>{videos.description}</p>     

            <div className={styles.videos}>
                {videos.videosInfo?.map((el) => (
                    <Card
                        key={el.id}
                        hoverable
                        className={styles.video}                 
                        cover={<img alt={el.cover?.alt} src={el.cover?.src} className={styles.video__image}/>}
                    >
                        <Meta title={el.title} description={el.description} />
                        <Collapse items={el.records} />
                    </Card>
                    )
                )}           
            </div>

            <div className={styles.helper}>
                <Helper src={helpers.videos?.src} text={helpers.videos?.text} link={helpers.videos?.link}/>
            </div>
        </section>
    );
}

export default Videos;