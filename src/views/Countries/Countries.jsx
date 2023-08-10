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
        <div className={styles.wrapper}>
            <div className={styles.countries}>
                {
                    counties.map((el) => (
                        el.map((county) => (
                            <Card
                                hoverable
                                className={styles.country}  // если делаю страну эл-м блока страны, то со стиля траблы
                                cover={<img className={styles.country__image} alt={county.cover.alt} src={county.cover.src} />}
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
                    onChange={onChange}
                    tabPosition="left"
                    size='small'
                    items={counties.map((item) => {
                            return item.map((el) => {
                                    return {
                                        label: el.title,
                                        key: el.id,
                                    };
                                })
                    }).flat()}
                    />
            </div>
        </div>
    );
}

export default Countries;