import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getDestinationsThunk } from '../../store/actions/mainActions'
import styles from './countries.module.scss'
import Helper from '../../components/Helper/Helper'
import Selection from '../../components/Selection/Selection'
import Loader from '../../components/Loader/Loader'
import ResultOfSearch from '../../components/ResultOfSearch/ResultOfSearch'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import { getHelpersThunk } from '../../store/actions/helpersActions'
const { Title } = Typography;
const { Meta } = Card;

function Countries() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const { destinations } = useSelector((store) => store.mainStore);
    const { helpers } = useSelector((store) => store.helpersStore);

    useEffect(() => {   
        dispatch(getDestinationsThunk())
        dispatch(getHelpersThunk())
    }, [])

    const countries = destinations.map((el) => [...el.countries]).flat() // 'это легче, чем пуш?
    const currentCountries = destinations.find((el) => el.id === +id)

    return (
        <section className={styles.wrapper}>
            {/* <div className={styles.selection}>
                <Title level={2}>Выбери страну</Title>
                <Selection countries={countries}/>
            </div> */}
            
            {/* <Loader/> */}
            {/* <ResultOfSearch title="в такой стране я еще не была"/> */}

            <div  className={styles.countries}>
                <div className={styles.countries__cards}>
                    {
                        currentCountries?.countries.map((el) => (   
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
                        items={destinations?.map((el) => {
                            return {
                                label: <Link key={el.id} to={`/world-regions/countries/${el.id}`}>{el.title}</Link>,
                                key: el.id,
                            };
                        })}
                        />
                </div>
            </div>

            <div className={styles.helper}>
                <Helper src={helpers.countries?.src} text={helpers.countries?.text} link={helpers.countries?.link}/>
            </div>
        </section>
    )
}

export default Countries;
