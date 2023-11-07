import React, { useEffect } from 'react';
import styles from './worldRegions.module.scss'
import Helper from '../../components/Helper/Helper'
import { Link } from 'react-router-dom'
import { Card } from 'antd';
import { Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getDestinationsThunk } from '../../store/actions/mainActions'
import { getHelpersThunk } from '../../store/actions/helpersActions'

const { Title } = Typography;
const { Meta } = Card;

function WorldRegions() {
    const dispatch = useDispatch();
    const destinations = useSelector((store) => store.mainStore);
    const helpers = useSelector((store) => store.helpersStore);

    useEffect(() => {   
        dispatch(getDestinationsThunk())
        dispatch(getHelpersThunk())
    }, [dispatch])

    return (
        <section className={styles.wrapper}>

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
            </div>  

            <div className={styles.helper}>
                <Helper src={helpers.worldRegions?.src} text={helpers.worldRegions?.text} link={helpers.worldRegions?.link}/>
            </div>
        </section>
    );
}

export default WorldRegions;