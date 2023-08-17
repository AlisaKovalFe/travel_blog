import React from 'react';
import styles from './worldRegions.module.scss'
import { destinations } from '../../data/destinations'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { Tabs } from 'antd';
const { Meta } = Card;

function WorldRegions(props) {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Выбери регион для путешествия</h2>
            <div className={styles.worldRegions}>
                {
                    destinations.map((el) => (                      
                            <Link key={el.id} to={`/world-regions/countries/${el.id}`}>                           
                                <Card
                                    // key={el.id}
                                    hoverable
                                    className={styles.worldRegions__region}
                                    cover={<img alt={el.cover.alt} src={el.cover.src} />}
                                >
                                    <Meta description={el.description} />
                                </Card>
                            </Link>
                    ))
                }
                <Tabs
                    centered
                    tabPosition="left"
                    size='small'
                    items={destinations.map((el) => {
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