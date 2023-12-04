import React from 'react';
import { Typography } from 'antd';
import ButtonLink from '../ButtonLink/ButtonLink'
import Player from '../Player/Player'
import styles from './videoBlock.module.scss'

const { Title } = Typography;

function VideoBlock({ videos, toTravelling, text, title }) {
    return (
        <div>
            {
                videos?.map((video) => (
                    <div key={video.key} className={styles.wrapper}>
                        <div className={styles.heading}>
                            <Title level={4}>Результаты поиска &quot;{video.city}, {video.country || title}&quot;</Title>
                            <ButtonLink 
                                onClick={() => toTravelling(video.id)} 
                                text={text} />
                        </div>
                        <Player url={video.videoUrl} width='60%' height='100%'/>
                    </div>   
                ))
            }
        </div>
    );
}

export default VideoBlock;