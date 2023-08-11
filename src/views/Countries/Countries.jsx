import React from 'react';
import styles from './countries.module.scss'
import { counties } from '../../data/countries'
import { Card } from 'antd';
import { Tabs } from 'antd';
const { Meta } = Card;

function Countries(props) {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.countries}>
                {
                    counties.map((el) => (    
                        <Card
                            hoverable
                            className={styles.country}  
                            cover={<img className={styles.country__image} alt={el.cover.alt} src={el.cover.src} />}
                            key={el.id}
                        >
                            <Meta description={el.description} />
                        </Card>    
                    ))
                }   
            </div>
            <div >
                <Tabs
                    centered
                    onChange={onChange}
                    tabPosition="left"
                    size='small'
                    items={counties.map((el) => {                           
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

export default Countries;