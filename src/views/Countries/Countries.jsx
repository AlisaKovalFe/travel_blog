import React from 'react';
import styles from './countries.module.scss'
import { counties } from '../../data/countries'
import { Card } from 'antd';
import { Tabs } from 'antd';
const { Meta } = Card;

function Countries(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.countries}>
                {
                    counties.map((el) => (
                        el.map((county) => (
                            <Card
                                hoverable
                                className={styles.country} //по идее country - это часть countries, но при этом image часть county, значит country - это элемент countries, и при этом блок, у которого есть эл-т image. Но как мне тут прописать правильно? если писать styles.countries country - так ошибку выдает
                                cover={<img className={styles.county__image} alt={county.cover.alt} src={county.cover.src} />}
                                key={county.id}
                        >
                            <Meta description={county.description} />
                        </Card>
                        ))
                        
                    ))
                }   
            </div>
            <div className="countries_tabs">
                <Tabs
                    centered
                    tabPosition="left"
                    size='small'
                    items={counties[0].map((el) => {
                                return {
                                    label: el.title,
                                    key: el.id,
                                };
                    })}
                    />
            </div>
        </div>
    );
}

export default Countries;