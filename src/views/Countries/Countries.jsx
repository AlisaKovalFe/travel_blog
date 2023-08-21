import React from 'react';
import styles from './countries.module.scss'
import Selection from '../../components/Selection/Selection'
import Loader from '../../components/Loader/Loader'
import ResultOfSearch from '../ResultOfSearch/ResultOfSearch'
import { Link } from 'react-router-dom'
import { destinations } from '../../data/destinations'
import { Card } from 'antd';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
const { Meta } = Card;

function Countries(props) {
    const { id } = useParams()
    const currentCountries = destinations.find((el) => el.id === +id)

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <section className={styles.wrapper}>
            <Selection/>
            <Loader/>
            <ResultOfSearch/>

            <div  className={styles.countries}>
                <div className={styles.countries__cards}>
                    {
                        currentCountries.countries.map((el) => (   
                            <Link key={el.id} to={`/world-regions/countries/${id}/country-information/${el.id}`}>
                                {/* {console.log(el.id)} */}
                                <Card
                                    hoverable
                                    className={styles.country}  
                                    cover={<img className={styles.country__image} alt={el.cover.alt} src={el.cover.src} />}
                                    key={el.id}
                                >
                                    <Meta description={el.description} />
                                </Card>    
                            </Link> 
                        ))
                    }   
                </div>
                <div className={styles.countries__tabs}>
                    <Tabs
                        centered
                        onChange={onChange}
                        tabPosition="left"
                        size='small'
                        items={currentCountries.countries.map((el) => {                           
                                return {label: el.title, key: el.id}                               
                        })}
                        />
                </div>
            </div>
        </section>
    );
}

export default Countries;