import React from 'react';
import styles from './worldRegions.module.scss'
import { worldRegions } from '../../data/worldRegions'
import { Card } from 'antd';
import { Tabs } from 'antd';
const { Meta } = Card;

function WorldRegions(props) {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Выбери регион для путешествия</h2>
            <div className={styles.worldRegions}>
                {
                    worldRegions.map((el) => (
                        <Card
                            hoverable
                            className={styles.worldRegions__region}
                            cover={<img alt={el.cover.alt} src={el.cover.src} />}
                            key={el.id}
                        >
                            <Meta description={el.description} />
                        </Card>
                    ))
                }
                <Tabs
                    centered
                    tabPosition="left"
                    size='small'
                    items={worldRegions.map((el) => {
                        return {
                            label: el.title,
                            key: el.id,
                        };
                    })}
                />
            </div>  
        </section>
    );
}

export default WorldRegions;