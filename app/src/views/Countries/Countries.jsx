import React from 'react';
import styles from './countries.module.scss'
import Helper from '../../components/Helper/Helper'
import Selection from '../../components/Selection/Selection'
import Loader from '../../components/Loader/Loader'
import ResultOfSearch from '../../components/ResultOfSearch/ResultOfSearch'
import { Link } from 'react-router-dom'
import { destinations } from '../../data/destinations'
import { Card } from 'antd';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { Typography } from 'antd';
const { Title } = Typography;
const { Meta } = Card;

function Countries(props) {
    const { id } = useParams()
    const currentCountries = destinations.find((el) => el.id === +id)

    return (
        <section className={styles.wrapper}>
            <Helper src='/images/girl-with-earings.svg' text='узнать больше о странах' link='https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2'/>
            <div className={styles.selection}>
                <Title level={2}>Выбери страну</Title>
                <Selection/>
            </div>
            
            <Loader/>
            <ResultOfSearch title="в такой стране я еще не была"/>

            <div  className={styles.countries}>
                <div className={styles.countries__cards}>
                    {
                        currentCountries.countries.map((el) => (   
                            <Link key={el.id} to={`/world-regions/countries/${id}/country-information/${el.id}`}>
                                <Card
                                    hoverable
                                    className={styles.country}  
                                    cover={<img className={styles.country__image} alt={el.cover.alt} src={el.cover.src} />}
                                    key={el.id}
                                >
                                    <Meta className={styles.link} description={el.description} />
                                </Card>    
                            </Link> 
                        ))
                    }   
                </div>
                <div className={styles.countries__tabs}>
                    <Tabs
                        centered
                        tabPosition="left"
                        size='small'
                        items={currentCountries.countries.map((el) => {                           
                                return {
                                    label: <Link key={el.id} to={`/world-regions/countries/${id}/country-information/${el.id}`}>{el.title}</Link>, 
                                    key: el.id
                                }                               
                        })}
                        />
                </div>
            </div>
        </section>
    );
}

export default Countries;
