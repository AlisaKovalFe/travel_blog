import React from 'react';
import styles from './worldRegions.module.scss'
import Helper from '../../components/Helper/Helper'
import { destinations } from '../../data/destinations'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { Tabs } from 'antd';
import { Typography } from 'antd';
const { Title } = Typography;
const { Meta } = Card;

function WorldRegions(props) {
    return (
        <section className={styles.wrapper}>
            <Helper src='/images/girl-with-hairstyle.svg' text='хочешь больше узнать о регионах?' link='https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83_%D0%95%D0%B2%D1%80%D0%BE%D0%BF%D0%BE%D0%B9_%D0%B8_%D0%90%D0%B7%D0%B8%D0%B5%D0%B9'/>

            <Title level={2} className={styles.heading}>Выбери регион для путешествия</Title>
            <div className={styles.worldRegions}>
                {
                    destinations.map((el) => (                      
                            <Link key={el.id} to={`/world-regions/countries/${el.id}`}>                           
                                <Card
                                    hoverable
                                    className={styles.worldRegions__region}
                                    cover={<img alt={el.cover.alt} src={el.cover.src} />}
                                >
                                    <Meta className={styles.link} description={el.description} />
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
                            label: <Link key={el.id} to={`/world-regions/countries/${el.id}`}>{el.title}</Link>,
                            key: el.id,
                        };
                    })}
                />
            </div>  
        </section>
    );
}

export default WorldRegions;